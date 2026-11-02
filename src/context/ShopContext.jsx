import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { getProductById } from "../data/catalog";
import { PROMO_CODES, computeTotals } from "../data/checkout";

export const ShopContext = createContext(null);

const CART_STORAGE_KEY = "buyit_cart_v2";
const WISHLIST_STORAGE_KEY = "buyit_wishlist_v1";
const PROMO_STORAGE_KEY = "buyit_promo_v1";
const ORDERS_STORAGE_KEY = "buyit_orders_v1";

const readStorage = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`Could not read "${key}" from localStorage:`, err);
    return fallback;
  }
};

const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Could not write "${key}" to localStorage:`, err);
  }
};

// A cart line is a product + optional size, e.g. "101" or "301|M"
export const makeLineKey = (id, size) => (size ? `${id}|${size}` : String(id));

export const parseLineKey = (lineKey) => {
  const [id, size] = String(lineKey).split("|");
  return { id: Number(id), size: size || null };
};

const quantityOfProduct = (cart, productId) =>
  Object.entries(cart).reduce(
    (acc, [key, qty]) => (parseLineKey(key).id === Number(productId) ? acc + qty : acc),
    0,
  );

const generateOrderNumber = () => {
  const date = new Date();
  const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  return `BI-${datePart}-${Math.floor(1000 + Math.random() * 9000)}`;
};

/**
 * Provider holding the whole shop state: cart with variants (t-shirt sizes),
 * wishlist, promo code, order history and toast notifications.
 * Cart, wishlist, promo code and orders are persisted in localStorage.
 */
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => readStorage(CART_STORAGE_KEY, {}));
  const [wishlist, setWishlist] = useState(() => readStorage(WISHLIST_STORAGE_KEY, []));
  const [promoCode, setPromoCode] = useState(() => readStorage(PROMO_STORAGE_KEY, null));
  const [orders, setOrders] = useState(() => readStorage(ORDERS_STORAGE_KEY, []));
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type, id: Date.now() });
  }, []);

  /**
   * Adds a product to the cart while respecting stock (the sum of all sizes
   * of a given product can't exceed `stock`).
   */
  const addItemToCart = (itemid, { size = null, quantity = 1 } = {}) => {
    const product = getProductById(itemid);
    if (!product) return;

    const available = product.stock - quantityOfProduct(cartItems, product.id);
    const toAdd = Math.min(quantity, available);
    if (toAdd <= 0) {
      showToast(
        product.stock === 0
          ? "Ten produkt jest obecnie niedostępny"
          : `Masz już w koszyku całą dostępną ilość (${product.stock} szt.)`,
        "error",
      );
      return;
    }

    const lineKey = makeLineKey(product.id, size);
    setCartItems((prev) => ({ ...prev, [lineKey]: (prev[lineKey] || 0) + toAdd }));

    showToast(
      toAdd < quantity
        ? `Dodano ${toAdd} szt. — to cała dostępna ilość`
        : `Dodano do koszyka: ${product.itemName}${size ? ` (${size})` : ""}`,
    );
  };

  const removeItemFromCart = (lineKey) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (next[lineKey] > 1) next[lineKey] -= 1;
      else delete next[lineKey];
      return next;
    });
  };

  const removeAllItemsFromCart = (lineKey) => {
    setCartItems((prev) => {
      const next = { ...prev };
      delete next[lineKey];
      return next;
    });
  };

  const updateCartItemCount = (newAmount, lineKey) => {
    const { id } = parseLineKey(lineKey);
    const product = getProductById(id);
    if (!product) return;
    const otherLines = quantityOfProduct(cartItems, id) - (cartItems[lineKey] || 0);
    const max = Math.max(0, product.stock - otherLines);
    const safeAmount = Number.isFinite(newAmount) ? Math.min(Math.max(0, Math.floor(newAmount)), max) : 0;

    setCartItems((prev) => {
      const next = { ...prev };
      if (safeAmount === 0) delete next[lineKey];
      else next[lineKey] = safeAmount;
      return next;
    });
  };

  const clearCart = () => setCartItems({});

  const getQuantityInCart = (productId) => quantityOfProduct(cartItems, productId);

  const toggleWishlist = (productId) => {
    const product = getProductById(productId);
    if (!product) return;
    const isIn = wishlist.includes(product.id);
    setWishlist((prev) => (isIn ? prev.filter((id) => id !== product.id) : [...prev, product.id]));
    showToast(isIn ? "Usunięto z ulubionych" : `Dodano do ulubionych: ${product.itemName}`, "info");
  };

  const isInWishlist = (productId) => wishlist.includes(Number(productId));

  const applyPromoCode = (rawCode) => {
    const code = rawCode.trim().toUpperCase();
    if (!PROMO_CODES[code]) {
      return { ok: false, message: "Ten kod rabatowy jest nieprawidłowy lub wygasł" };
    }
    setPromoCode(code);
    return { ok: true, message: `Zastosowano kod ${code}: ${PROMO_CODES[code].label}` };
  };

  const removePromoCode = () => setPromoCode(null);

  useEffect(() => writeStorage(CART_STORAGE_KEY, cartItems), [cartItems]);
  useEffect(() => writeStorage(WISHLIST_STORAGE_KEY, wishlist), [wishlist]);
  useEffect(() => writeStorage(PROMO_STORAGE_KEY, promoCode), [promoCode]);
  useEffect(() => writeStorage(ORDERS_STORAGE_KEY, orders), [orders]);

  // Auto-hide the toast after 3s
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const cartItemsDetailed = useMemo(() => {
    return Object.entries(cartItems)
      .filter(([, qty]) => qty > 0)
      .map(([lineKey, qty]) => {
        const { id, size } = parseLineKey(lineKey);
        const product = getProductById(id);
        if (!product) return null;
        return {
          ...product,
          lineKey,
          size,
          quantity: qty,
          summaryPrice: product.price * qty,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const totalQuantity = useMemo(
    () => cartItemsDetailed.reduce((acc, item) => acc + item.quantity, 0),
    [cartItemsDetailed],
  );

  const cartTotalPrice = useMemo(
    () => cartItemsDetailed.reduce((acc, item) => acc + item.summaryPrice, 0),
    [cartItemsDetailed],
  );

  /**
   * Saves the order (demo only — no real payment or shipping),
   * clears the cart and promo code, and returns the created order.
   */
  const placeOrder = ({ customer, deliveryId, paymentId, notes }) => {
    const order = {
      number: generateOrderNumber(),
      createdAt: new Date().toISOString(),
      items: cartItemsDetailed.map(({ id, itemName, itemImage, price, size, quantity }) => ({
        id,
        itemName,
        itemImage,
        price,
        size,
        quantity,
      })),
      totals: computeTotals({ subtotal: cartTotalPrice, promoCode, deliveryId, paymentId }),
      promoCode,
      customer,
      deliveryId,
      paymentId,
      notes,
    };
    setOrders((prev) => [order, ...prev].slice(0, 20));
    setCartItems({});
    setPromoCode(null);
    return order;
  };

  const getOrder = (number) => orders.find((order) => order.number === number) || null;

  const contextValue = {
    cartItems,
    cartItemsDetailed,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    removeAllItemsFromCart,
    clearCart,
    getQuantityInCart,
    totalQuantity,
    cartTotalPrice,
    wishlist,
    toggleWishlist,
    isInWishlist,
    promoCode,
    applyPromoCode,
    removePromoCode,
    placeOrder,
    getOrder,
    toast,
    setToast,
    showToast,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
