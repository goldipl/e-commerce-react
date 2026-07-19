import React, { createContext, useState, useEffect, useMemo } from "react";
import { BOOKS } from "../data/books";
import { PS5GAMES } from "../data/games";
import { TSHIRTS } from "../data/tshirts";

export const ShopContext = createContext(null);

const ALL_PRODUCTS = [...BOOKS, ...PS5GAMES, ...TSHIRTS];
const CART_STORAGE_KEY = "buyit_cart_v1";

const readInitialCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn("Nie udało się odczytać koszyka z localStorage:", err);
    return {};
  }
};

/**
 * Provider spinający cały stan sklepu: koszyk (z persystencją w localStorage),
 * wyszukiwarkę oraz pochodne wartości takie jak liczba sztuk i wartość koszyka.
 */
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(readInitialCart);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);

  const addItemToCart = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: prev[itemid] > 0 ? prev[itemid] + 1 : 1,
    }));

    const product = ALL_PRODUCTS.find((item) => item.id === Number(itemid));
    if (product) {
      setToast({ message: `Dodano do koszyka: ${product.itemName}`, id: Date.now() });
    }
  };

  const removeItemFromCart = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: prev[itemid] > 0 ? prev[itemid] - 1 : 0,
    }));
  };

  const removeAllItemsFromCart = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: 0,
    }));
  };

  const updateCartItemCount = (newAmount, itemid) => {
    const safeAmount = Number.isFinite(newAmount) && newAmount >= 0 ? newAmount : 0;
    setCartItems((prev) => ({ ...prev, [itemid]: safeAmount }));
  };

  const clearCart = () => setCartItems({});

  // Zapis koszyka do localStorage przy każdej zmianie
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.warn("Nie udało się zapisać koszyka do localStorage:", err);
    }
  }, [cartItems]);

  // Automatyczne chowanie toasta po 2.5s
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const totalQuantity = useMemo(
    () => Object.values(cartItems).reduce((acc, curr) => acc + (curr > 0 ? curr : 0), 0),
    [cartItems],
  );

  const cartTotalPrice = useMemo(() => {
    return Object.entries(cartItems).reduce((acc, [id, qty]) => {
      if (!qty || qty <= 0) return acc;
      // ID w cartItems to klucze obiektu (zawsze stringi), a id produktu to Number — porównujemy przez Number()
      const product = ALL_PRODUCTS.find((item) => item.id === Number(id));
      if (!product) return acc;
      return acc + product.price * qty;
    }, 0);
  }, [cartItems]);

  const cartItemsDetailed = useMemo(() => {
    return Object.entries(cartItems)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const product = ALL_PRODUCTS.find((item) => item.id === Number(id));
        if (!product) return null;
        return {
          ...product,
          quantity: qty,
          summaryPrice: (product.price * qty).toFixed(2),
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const getProductById = (id) => ALL_PRODUCTS.find((item) => item.id === Number(id));

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return ALL_PRODUCTS.filter((item) => item.itemName.toLowerCase().includes(query)).slice(0, 8);
  }, [searchQuery]);

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    removeAllItemsFromCart,
    clearCart,
    totalQuantity,
    cartTotalPrice,
    cartItemsDetailed,
    getProductById,
    searchQuery,
    setSearchQuery,
    searchResults,
    toast,
    setToast,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
