const priceFormatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
});

export const formatPrice = (value) => priceFormatter.format(value);

export const getDiscountPercent = ({ price, oldPrice }) =>
  oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;

// Polish plural forms: 1 produkt, 2–4 produkty, 5+ produktów (12–14 take the "many" form)
export const pluralize = (count, one, few, many) => {
  if (count === 1) return one;
  const lastDigit = count % 10;
  const lastTwo = count % 100;
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) return few;
  return many;
};

export const formatDate = (iso) =>
  new Date(iso).toLocaleString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
