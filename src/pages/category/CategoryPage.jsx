import React from "react";
import { BASE_PATH, CATEGORIES, CATEGORY_FACET, SALE_PRODUCTS } from "../../data/catalog";
import { ProductListing } from "../../components/listing/ProductListing";
import { Breadcrumbs } from "../../components/ui";
import { usePageTitle } from "../../hooks/usePageTitle";
import { ListingHeader } from "./CategoryPageStyles";

const SALE_FACETS = [CATEGORY_FACET];

export const CategoryPage = ({ categoryKey }) => {
  const category = CATEGORIES[categoryKey];
  usePageTitle(category.label);

  return (
    <div className="wrapper">
      <Breadcrumbs items={[["Strona główna", `${BASE_PATH}/`], [category.label]]} />
      <ListingHeader>
        <h1>{category.label}</h1>
        <p>{category.intro}</p>
      </ListingHeader>
      {/* key resets local listing state (drawer, price draft) when switching categories */}
      <ProductListing key={category.key} items={category.items} facets={category.facets} />
    </div>
  );
};

export const SalePage = () => {
  usePageTitle("Promocje");

  return (
    <div className="wrapper">
      <Breadcrumbs items={[["Strona główna", `${BASE_PATH}/`], ["Promocje"]]} />
      <ListingHeader $accent>
        <h1>Promocje</h1>
        <p>
          Obniżki na gry, książki i t-shirty. Przy każdym produkcie podajemy najniższą cenę z 30 dni
          przed obniżką.
        </p>
      </ListingHeader>
      <ProductListing items={SALE_PRODUCTS} facets={SALE_FACETS} />
    </div>
  );
};
