import React from "react";
import SwiperHero from "./../../components/home/swiper/SwiperHero";
import {
  TrustBar,
  CategoryTiles,
  ProductSection,
  SaleLead,
  Newsletter,
  SeoText,
} from "../../components/home/HomeSections";
import { Band, BandInner } from "../../components/home/HomeSectionsStyles";
import { BASE_PATH, CATEGORIES, SALE_PRODUCTS, getBestsellers, sortProducts } from "../../data/catalog";
import { getDiscountPercent } from "../../utils/format";
import { usePageTitle } from "../../hooks/usePageTitle";

const SECTION_SIZE = 5;

const topOf = (items, sort = "featured") => sortProducts(items, sort).slice(0, SECTION_SIZE);

const bestsellers = getBestsellers(SECTION_SIZE);
const bestsellerIds = new Set(bestsellers.map((p) => p.id));
// Sale section skips products already shown in bestsellers, unless that would leave it too short
const saleCandidates = SALE_PRODUCTS.filter((p) => !bestsellerIds.has(p.id) && p.stock > 0);
const saleItems = topOf(saleCandidates.length >= 3 ? saleCandidates : SALE_PRODUCTS);
const maxDiscount = Math.max(...SALE_PRODUCTS.map(getDiscountPercent));

export const Home = () => {
  usePageTitle(null);

  return (
    <>
      <Band $tone="hero">
        <BandInner>
          <SwiperHero />
          <TrustBar />
          <CategoryTiles />
        </BandInner>
      </Band>
      <ProductSection title="Bestsellery" subtitle="Najczęściej wybierane w tym tygodniu" items={bestsellers} />
      <ProductSection
        tone="sale"
        title="Promocje"
        subtitle="Obniżki na gry, książki i t-shirty"
        linkTo={`${BASE_PATH}/sale`}
        linkLabel="Wszystkie promocje"
        items={saleItems.slice(0, 3)}
        lead={<SaleLead to={`${BASE_PATH}/sale`} maxDiscount={maxDiscount} />}
      />
      <ProductSection
        tone="dark"
        title="Nowości w grach"
        subtitle="Najnowsze premiery na PlayStation 5"
        linkTo={CATEGORIES.games.path}
        items={topOf(CATEGORIES.games.items, "newest")}
      />
      <ProductSection title="Polecane książki" linkTo={CATEGORIES.books.path} items={topOf(CATEGORIES.books.items)} />
      <ProductSection title="T-shirty Classic" linkTo={CATEGORIES.tshirts.path} items={topOf(CATEGORIES.tshirts.items)} />
      <BandInner>
        <Newsletter />
        <SeoText />
      </BandInner>
    </>
  );
};
