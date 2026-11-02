import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineFilter, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { SORT_OPTIONS, isOnSale, sortProducts } from "../../data/catalog";
import { formatPrice, pluralize } from "../../utils/format";
import { ItemShop } from "../item/ItemShop/ItemShop";
import { ProductGrid } from "../item/ItemShop/ItemShopStyles";
import { Button, EmptyState } from "../ui";
import {
  ListingLayout,
  Sidebar,
  SidebarHeader,
  FilterGroup,
  CheckboxRow,
  ColorSwatch,
  PriceInputs,
  Toolbar,
  ResultCount,
  SortSelect,
  MobileFilterBtn,
  ActiveFilters,
  Chip,
  Backdrop,
} from "./ProductListingStyles";

const LIST_SEPARATOR = ",";

const readList = (params, key) =>
  params.get(key) ? params.get(key).split(LIST_SEPARATOR).filter(Boolean) : [];

const readNumber = (params, key) => {
  const value = parseFloat(params.get(key));
  return Number.isFinite(value) ? value : null;
};

/**
 * Product listing with filters and sorting. All filter state lives in the URL
 * query string, so a filtered view can be shared and survives a refresh.
 * `facets` come from the category config (see data/catalog.js).
 */
export const ProductListing = ({ items, facets = [], emptyAction }) => {
  const [params, setParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const sort = params.get("sort") || SORT_OPTIONS[0].value;
  const minPrice = readNumber(params, "min");
  const maxPrice = readNumber(params, "max");
  const onlySale = params.get("sale") === "1";
  const onlyInStock = params.get("available") === "1";
  const selected = useMemo(
    () => Object.fromEntries(facets.map((f) => [f.key, readList(params, f.key)])),
    [facets, params],
  );

  const [priceDraft, setPriceDraft] = useState({ min: minPrice ?? "", max: maxPrice ?? "" });
  useEffect(() => {
    setPriceDraft({ min: minPrice ?? "", max: maxPrice ?? "" });
  }, [minPrice, maxPrice]);

  // Lock page scroll while the mobile filter drawer is open
  useEffect(() => {
    document.body.style.overflow = filtersOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [filtersOpen]);

  const updateParams = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, value]) => {
      const isEmpty = value === null || value === "" || (Array.isArray(value) && value.length === 0);
      if (isEmpty) next.delete(key);
      else next.set(key, Array.isArray(value) ? value.join(LIST_SEPARATOR) : String(value));
    });
    setParams(next, { replace: true });
  };

  const toggleFacetValue = (facetKey, value) => {
    const current = selected[facetKey];
    updateParams({
      [facetKey]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
    });
  };

  const applyPrice = () => {
    const min = parseFloat(priceDraft.min);
    const max = parseFloat(priceDraft.max);
    updateParams({
      min: Number.isFinite(min) && min > 0 ? min : null,
      max: Number.isFinite(max) && max > 0 ? max : null,
    });
  };

  const clearAll = () => {
    const next = new URLSearchParams();
    if (params.get("q")) next.set("q", params.get("q"));
    if (params.get("sort")) next.set("sort", params.get("sort"));
    setParams(next, { replace: true });
  };

  // Products that pass every filter except the one facet given — used for facet counts
  const filterItems = (skipFacetKey) =>
    items.filter((p) => {
      if (minPrice !== null && p.price < minPrice) return false;
      if (maxPrice !== null && p.price > maxPrice) return false;
      if (onlySale && !isOnSale(p)) return false;
      if (onlyInStock && p.stock <= 0) return false;
      return facets.every((f) => {
        if (f.key === skipFacetKey || selected[f.key].length === 0) return true;
        return f.getValues(p).some((v) => selected[f.key].includes(String(v)));
      });
    });

  const visibleItems = sortProducts(filterItems(null), sort);

  const facetOptions = facets.map((facet) => {
    const base = filterItems(facet.key);
    const allValues = [...new Set(items.flatMap((p) => facet.getValues(p).map(String)))];
    if (facet.order) allValues.sort((a, b) => facet.order.indexOf(a) - facet.order.indexOf(b));
    else allValues.sort((a, b) => a.localeCompare(b, "pl", { numeric: true }));
    return {
      facet,
      options: allValues.map((value) => ({
        value,
        count: base.filter((p) => facet.getValues(p).map(String).includes(value)).length,
        hex: facet.type === "color" ? items.find((p) => p.color?.name === value)?.color.hex : null,
      })),
    };
  });

  const activeChips = [
    ...facets.flatMap((f) =>
      selected[f.key].map((value) => ({
        label: value,
        onRemove: () => toggleFacetValue(f.key, value),
      })),
    ),
    minPrice !== null && { label: `od ${formatPrice(minPrice)}`, onRemove: () => updateParams({ min: null }) },
    maxPrice !== null && { label: `do ${formatPrice(maxPrice)}`, onRemove: () => updateParams({ max: null }) },
    onlySale && { label: "Promocje", onRemove: () => updateParams({ sale: null }) },
    onlyInStock && { label: "Dostępne", onRemove: () => updateParams({ available: null }) },
  ].filter(Boolean);

  const hasSaleItems = items.some(isOnSale);

  return (
    <ListingLayout>
      {filtersOpen && <Backdrop onClick={() => setFiltersOpen(false)} />}
      <Sidebar $open={filtersOpen} aria-label="Filtry">
        <SidebarHeader>
          <h2>Filtry</h2>
          <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Zamknij filtry">
            <AiOutlineClose />
          </button>
        </SidebarHeader>

        {facetOptions.map(({ facet, options }) => (
          <FilterGroup key={facet.key}>
            <legend>{facet.label}</legend>
            {options.map(({ value, count, hex }) => {
              const checked = selected[facet.key].includes(value);
              return (
                <CheckboxRow key={value} $disabled={count === 0 && !checked}>
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={count === 0 && !checked}
                    onChange={() => toggleFacetValue(facet.key, value)}
                  />
                  {hex && <ColorSwatch style={{ background: hex }} aria-hidden="true" />}
                  <span>{value}</span>
                  <small>{count}</small>
                </CheckboxRow>
              );
            })}
          </FilterGroup>
        ))}

        <FilterGroup>
          <legend>Cena (zł)</legend>
          <PriceInputs
            onSubmit={(e) => {
              e.preventDefault();
              applyPrice();
            }}
          >
            <input
              type="number"
              min="0"
              inputMode="decimal"
              placeholder="od"
              aria-label="Cena minimalna"
              value={priceDraft.min}
              onChange={(e) => setPriceDraft((d) => ({ ...d, min: e.target.value }))}
              onBlur={applyPrice}
            />
            <span>–</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              placeholder="do"
              aria-label="Cena maksymalna"
              value={priceDraft.max}
              onChange={(e) => setPriceDraft((d) => ({ ...d, max: e.target.value }))}
              onBlur={applyPrice}
            />
            <button type="submit" className="visually-hidden">
              Zastosuj
            </button>
          </PriceInputs>
        </FilterGroup>

        <FilterGroup>
          <legend>Dostępność</legend>
          {hasSaleItems && (
            <CheckboxRow>
              <input
                type="checkbox"
                checked={onlySale}
                onChange={() => updateParams({ sale: onlySale ? null : 1 })}
              />
              <span>Tylko promocje</span>
            </CheckboxRow>
          )}
          <CheckboxRow>
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={() => updateParams({ available: onlyInStock ? null : 1 })}
            />
            <span>Tylko dostępne</span>
          </CheckboxRow>
        </FilterGroup>

        <Button type="button" $block className="mobile-only" onClick={() => setFiltersOpen(false)}>
          Pokaż {visibleItems.length} {pluralize(visibleItems.length, "produkt", "produkty", "produktów")}
        </Button>
      </Sidebar>

      <div>
        <Toolbar>
          <MobileFilterBtn type="button" onClick={() => setFiltersOpen(true)}>
            <AiOutlineFilter />
            Filtry{activeChips.length > 0 && ` (${activeChips.length})`}
          </MobileFilterBtn>
          <ResultCount>
            {visibleItems.length} {pluralize(visibleItems.length, "produkt", "produkty", "produktów")}
          </ResultCount>
          <SortSelect>
            <span>Sortuj:</span>
            <select value={sort} onChange={(e) => updateParams({ sort: e.target.value })}>
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SortSelect>
        </Toolbar>

        {activeChips.length > 0 && (
          <ActiveFilters>
            {activeChips.map((chip) => (
              <Chip key={chip.label} type="button" onClick={chip.onRemove} aria-label={`Usuń filtr ${chip.label}`}>
                {chip.label}
                <AiOutlineClose />
              </Chip>
            ))}
            <Chip type="button" $plain onClick={clearAll}>
              Wyczyść wszystko
            </Chip>
          </ActiveFilters>
        )}

        {visibleItems.length > 0 ? (
          <ProductGrid>
            {visibleItems.map((item) => (
              <ItemShop key={item.id} {...item} />
            ))}
          </ProductGrid>
        ) : (
          <EmptyState
            icon={AiOutlineSearch}
            title="Brak produktów"
            action={
              activeChips.length > 0 ? (
                <Button type="button" $variant="secondary" onClick={clearAll}>
                  Wyczyść filtry
                </Button>
              ) : (
                emptyAction
              )
            }
          >
            {activeChips.length > 0
              ? "Żaden produkt nie spełnia wybranych kryteriów. Spróbuj poluzować filtry."
              : "Nie znaleźliśmy pasujących produktów."}
          </EmptyState>
        )}
      </div>
    </ListingLayout>
  );
};
