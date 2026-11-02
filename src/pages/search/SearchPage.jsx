import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_PATH, CATEGORY_FACET, searchProducts } from "../../data/catalog";
import { ProductListing } from "../../components/listing/ProductListing";
import { Breadcrumbs, ButtonLink, PageTitle } from "../../components/ui";
import { usePageTitle } from "../../hooks/usePageTitle";

const SEARCH_FACETS = [CATEGORY_FACET];

export const SearchPage = () => {
  const [params] = useSearchParams();
  const query = (params.get("q") || "").trim();
  const results = useMemo(() => searchProducts(query), [query]);

  usePageTitle(query ? `Wyniki dla „${query}”` : "Wyszukiwanie");

  return (
    <div className="wrapper">
      <Breadcrumbs items={[["Strona główna", `${BASE_PATH}/`], ["Wyszukiwanie"]]} />
      <PageTitle>
        {query ? <>Wyniki dla „{query}”</> : "Wyszukiwanie"}
      </PageTitle>
      <ProductListing
        key={query}
        items={results}
        facets={SEARCH_FACETS}
        emptyAction={
          <ButtonLink to={`${BASE_PATH}/`} $variant="secondary">
            Wróć do strony głównej
          </ButtonLink>
        }
      />
    </div>
  );
};
