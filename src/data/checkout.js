export const FREE_SHIPPING_THRESHOLD = 200;

export const DELIVERY_METHODS = [
  {
    id: "parcel-locker",
    label: "Paczkomat InPost",
    description: "Odbiór w wybranym paczkomacie, zwykle następnego dnia roboczego",
    price: 12.99,
    freeAboveThreshold: true,
  },
  {
    id: "courier",
    label: "Kurier DPD",
    description: "Dostawa pod wskazany adres w 1–2 dni robocze",
    price: 16.99,
    freeAboveThreshold: true,
  },
  {
    id: "pickup",
    label: "Odbiór osobisty",
    description: "Salon BuyIt — gotowe do odbioru tego samego dnia",
    price: 0,
    freeAboveThreshold: false,
  },
];

export const PAYMENT_METHODS = [
  { id: "blik", label: "BLIK", description: "Kod z aplikacji bankowej", fee: 0 },
  { id: "transfer", label: "Szybki przelew online", description: "Wszystkie popularne banki", fee: 0 },
  { id: "card", label: "Karta płatnicza", description: "Visa, Mastercard — na stronie operatora", fee: 0 },
  { id: "cod", label: "Płatność przy odbiorze", description: "Gotówką lub kartą u kuriera", fee: 5, onlyFor: ["courier"] },
];

// Demo promo codes, advertised in the announcement bar
export const PROMO_CODES = {
  BUYIT10: { type: "percent", value: 10, label: "−10% na całe zamówienie" },
  DOSTAWA0: { type: "shipping", label: "Darmowa dostawa" },
};

export const getDeliveryMethod = (id) => DELIVERY_METHODS.find((m) => m.id === id);
export const getPaymentMethod = (id) => PAYMENT_METHODS.find((m) => m.id === id);

export const getDeliveryPrice = (method, subtotal, promo) => {
  if (!method) return 0;
  if (promo?.type === "shipping") return 0;
  if (method.freeAboveThreshold && subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
  return method.price;
};

const round = (value) => Math.round(value * 100) / 100;

/**
 * All order amounts are computed in one place so the cart, checkout
 * and order confirmation always show the same numbers.
 */
export const computeTotals = ({ subtotal, promoCode, deliveryId, paymentId }) => {
  const promo = promoCode ? PROMO_CODES[promoCode] : null;
  const discount = promo?.type === "percent" ? round((subtotal * promo.value) / 100) : 0;
  const delivery = deliveryId
    ? getDeliveryPrice(getDeliveryMethod(deliveryId), subtotal, promo)
    : null;
  const paymentFee = paymentId ? getPaymentMethod(paymentId)?.fee || 0 : 0;
  const total = round(subtotal - discount + (delivery || 0) + paymentFee);
  const missingForFreeShipping = Math.max(0, round(FREE_SHIPPING_THRESHOLD - subtotal));
  const freeShipping = promo?.type === "shipping" || missingForFreeShipping === 0;

  return {
    subtotal: round(subtotal),
    discount,
    delivery,
    paymentFee,
    total,
    missingForFreeShipping,
    freeShipping,
  };
};
