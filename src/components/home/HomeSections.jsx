import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCar, AiOutlineUndo, AiOutlineSafety, AiOutlineThunderbolt, AiOutlineArrowRight } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import { CATEGORY_LIST, sortProducts } from "../../data/catalog";
import { FREE_SHIPPING_THRESHOLD } from "../../data/checkout";
import { formatPrice, pluralize } from "../../utils/format";
import { ItemShop } from "../item/ItemShop/ItemShop";
import { ProductGrid } from "../item/ItemShop/ItemShopStyles";
import { Button } from "../ui";
import {
  TrustList,
  CategoryTilesGrid,
  CategoryTile,
  TileImages,
  Band,
  BandInner,
  SectionHeader,
  TitleBadge,
  LeadCard,
  NewsletterBox,
  SeoTextContainer,
} from "./HomeSectionsStyles";

export const TrustBar = () => (
  <TrustList>
    <li>
      <AiOutlineCar aria-hidden="true" />
      <span>
        <strong>Darmowa dostawa</strong>
        od {formatPrice(FREE_SHIPPING_THRESHOLD)}
      </span>
    </li>
    <li>
      <AiOutlineThunderbolt aria-hidden="true" />
      <span>
        <strong>Wysyłka w 24 h</strong>
        zamówienia do 14:00
      </span>
    </li>
    <li>
      <AiOutlineUndo aria-hidden="true" />
      <span>
        <strong>30 dni na zwrot</strong>
        bez podawania przyczyny
      </span>
    </li>
    <li>
      <AiOutlineSafety aria-hidden="true" />
      <span>
        <strong>Bezpieczne płatności</strong>
        BLIK, przelew, karta
      </span>
    </li>
  </TrustList>
);

export const CategoryTiles = () => (
  <CategoryTilesGrid>
    {CATEGORY_LIST.map((category) => {
      const preview = sortProducts(category.items, "featured").slice(0, 3);
      return (
        <CategoryTile key={category.key} to={category.path} $variant={category.key}>
          <div>
            <h3>{category.label}</h3>
            <p>
              {category.items.length} {pluralize(category.items.length, "produkt", "produkty", "produktów")}
            </p>
            <span>
              Przeglądaj <AiOutlineArrowRight aria-hidden="true" />
            </span>
          </div>
          <TileImages aria-hidden="true">
            {preview.map((item) => (
              <img key={item.id} src={item.itemImage} alt="" loading="lazy" />
            ))}
          </TileImages>
        </CategoryTile>
      );
    })}
  </CategoryTilesGrid>
);

// Two-column promo tile that opens the sale section grid
export const SaleLead = ({ to, maxDiscount }) => (
  <LeadCard to={to}>
    <div>
      <strong>do −{maxDiscount}%</strong>
      <p>Przy każdej obniżce pokazujemy najniższą cenę z 30 dni przed promocją.</p>
    </div>
    <span>
      Wszystkie promocje <AiOutlineArrowRight aria-hidden="true" />
    </span>
  </LeadCard>
);

// `tone` picks the full-width background band: "plain", "sale" or "dark";
// `lead` is an optional element rendered as the first grid cell
export const ProductSection = ({
  title,
  subtitle,
  badge,
  linkTo,
  linkLabel = "Zobacz wszystkie",
  items,
  tone = "plain",
  lead,
}) => (
  <Band $tone={tone}>
    <BandInner>
      <SectionHeader $inverted={tone === "dark"}>
        <div>
          <h2>
            {title}
            {badge && <TitleBadge>{badge}</TitleBadge>}
          </h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {linkTo && (
          <Link to={linkTo}>
            {linkLabel} <AiOutlineArrowRight aria-hidden="true" />
          </Link>
        )}
      </SectionHeader>
      <ProductGrid>
        {lead}
        {items.map((item) => (
          <ItemShop key={item.id} {...item} />
        ))}
      </ProductGrid>
    </BandInner>
  </Band>
);

export const Newsletter = () => {
  const { showToast } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Podaj poprawny adres e-mail");
      return;
    }
    setError("");
    setEmail("");
    // Demo store: the address is not sent or stored anywhere
    showToast("Dziękujemy! Będziemy informować o nowościach (wersja demo).", "info");
  };

  return (
    <NewsletterBox>
      <div>
        <h2>Bądź na bieżąco</h2>
        <p>Nowe premiery gier, książki i promocje — raz w tygodniu, bez spamu.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="newsletter-email" className="visually-hidden">
          Adres e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
        />
        <Button type="submit" $variant="dark">
          Zapisz się
        </Button>
        {error && <span id="newsletter-error">{error}</span>}
      </form>
    </NewsletterBox>
  );
};

export const SeoText = () => (
  <SeoTextContainer>
    <h2>BuyIt — gry, książki i t-shirty w jednym miejscu</h2>
    <p>
      W BuyIt znajdziesz najgłośniejsze gry na PlayStation 5, sprawdzone książki o programowaniu i
      wygodne bawełniane t-shirty. Starannie dobieramy asortyment, żeby każdy zakup cieszył na długo.
    </p>
    <ol>
      <li>
        <strong>Gry na PS5.</strong> Przygoda, akcja i RPG w wersjach pudełkowych — od Ghost of
        Tsushima po Marvel's Spider-Man 2.
      </li>
      <li>
        <strong>Książki o programowaniu.</strong> JavaScript, Java, Python i C++ dla początkujących i
        zaawansowanych.
      </li>
      <li>
        <strong>T-shirty Classic.</strong> Dziesięć kolorów, rozmiary od S do XXL i miękka bawełna,
        która nie traci formy po praniu.
      </li>
      <li>
        <strong>Wygodne zakupy.</strong> Wysyłka w 24 h, darmowa dostawa od{" "}
        {formatPrice(FREE_SHIPPING_THRESHOLD)} i 30 dni na zwrot.
      </li>
    </ol>
  </SeoTextContainer>
);
