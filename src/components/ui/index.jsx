import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { formatPrice, getDiscountPercent } from "../../utils/format";
import { LOW_STOCK_THRESHOLD, isOnSale } from "../../data/catalog";
import {
  Stepper,
  PriceBox,
  BadgeList,
  Badge,
  Availability,
  BreadcrumbsNav,
  EmptyStateBox,
} from "./UiStyles";

export * from "./UiStyles";

export const QuantityStepper = ({ value, onChange, min = 1, max = 99, size, label = "Ilość" }) => (
  <Stepper $size={size}>
    <button
      type="button"
      onClick={() => onChange(value - 1)}
      disabled={value <= min}
      aria-label="Zmniejsz ilość"
    >
      <AiOutlineMinus />
    </button>
    <input
      type="number"
      inputMode="numeric"
      value={value}
      min={min}
      max={max}
      aria-label={label}
      onChange={(e) => {
        const next = parseInt(e.target.value, 10);
        if (Number.isFinite(next)) onChange(Math.min(Math.max(next, min), max));
      }}
    />
    <button
      type="button"
      onClick={() => onChange(value + 1)}
      disabled={value >= max}
      aria-label="Zwiększ ilość"
    >
      <AiOutlinePlus />
    </button>
  </Stepper>
);

export const PriceTag = ({ product, size }) => {
  const sale = isOnSale(product);
  return (
    <PriceBox $sale={sale} $size={size}>
      <strong>{formatPrice(product.price)}</strong>
      {sale && (
        <s>
          <span className="visually-hidden">Cena przed obniżką: </span>
          {formatPrice(product.oldPrice)}
        </s>
      )}
    </PriceBox>
  );
};

export const ProductBadges = ({ product }) => {
  const discount = getDiscountPercent(product);
  if (!discount && !product.isNew && !product.isBestseller) return null;
  return (
    <BadgeList>
      {discount > 0 && <Badge $variant="sale">−{discount}%</Badge>}
      {product.isNew && <Badge $variant="new">Nowość</Badge>}
      {product.isBestseller && <Badge $variant="bestseller">Bestseller</Badge>}
    </BadgeList>
  );
};

export const getStockStatus = (stock) =>
  stock <= 0 ? "out" : stock <= LOW_STOCK_THRESHOLD ? "low" : "in";

export const StockInfo = ({ stock, detailed = false }) => {
  const status = getStockStatus(stock);
  const text = {
    out: "Chwilowo niedostępny",
    low: detailed ? `Ostatnie sztuki — zostało ${stock}` : "Ostatnie sztuki",
    in: detailed ? "Dostępny — wysyłka w 24 h" : "Dostępny",
  }[status];
  return <Availability $status={status}>{text}</Availability>;
};

// `items` is a list of [label, path]; the last item (without a path) is the current page
export const Breadcrumbs = ({ items }) => (
  <BreadcrumbsNav aria-label="Ścieżka nawigacji">
    <ol>
      {items.map(([label, to]) => (
        <li key={label}>
          {to ? <Link to={to}>{label}</Link> : <span aria-current="page">{label}</span>}
        </li>
      ))}
    </ol>
  </BreadcrumbsNav>
);

export const EmptyState = ({ icon: Icon, title, children, action }) => (
  <EmptyStateBox>
    {Icon && <Icon aria-hidden="true" />}
    <h2>{title}</h2>
    {children && <p>{children}</p>}
    {action}
  </EmptyStateBox>
);
