import { BOOKS } from "./books";
import { PS5GAMES } from "./games";
import { TSHIRTS, TSHIRT_SIZES } from "./tshirts";

export const BASE_PATH = "/e-commerce-react";

export const ALL_PRODUCTS = [...BOOKS, ...PS5GAMES, ...TSHIRTS];

const PRODUCTS_BY_ID = new Map(ALL_PRODUCTS.map((item) => [item.id, item]));

export const getProductById = (id) => PRODUCTS_BY_ID.get(Number(id)) || null;

export const productPath = (id) => `${BASE_PATH}/product/${id}`;

export const LOW_STOCK_THRESHOLD = 5;

/**
 * Category config — single source of truth for routing, navigation,
 * listing filters, product page specs and product card captions.
 */
export const CATEGORIES = {
  books: {
    key: "books",
    label: "Książki",
    singular: "Książka",
    path: `${BASE_PATH}/books`,
    items: BOOKS,
    intro:
      "Książki o programowaniu — od pierwszych kroków w JavaScripcie i Pythonie po zaawansowaną Javę i C++.",
    facets: [{ key: "topic", label: "Tematyka", getValues: (p) => [p.topic] }],
    meta: (p) => p.author || `Książka · ${p.topic}`,
    specs: (p) => [
      ["Autor", p.author],
      ["Tematyka", p.topic],
      ["Format", "Książka drukowana"],
      ["Język", "polski"],
    ],
  },
  games: {
    key: "games",
    label: "Gry",
    singular: "Gra",
    path: `${BASE_PATH}/games`,
    items: PS5GAMES,
    intro:
      "Najgłośniejsze tytuły na PlayStation 5 w wersji pudełkowej — przygoda, akcja, RPG i rozgrywka wieloosobowa.",
    facets: [
      { key: "genre", label: "Gatunek", getValues: (p) => [p.genre] },
      { key: "pegi", label: "PEGI", getValues: (p) => [`PEGI ${p.pegi}`] },
    ],
    meta: (p) => `${p.platform} · PEGI ${p.pegi}`,
    specs: (p) => [
      ["Platforma", "PlayStation 5"],
      ["Gatunek", p.genre],
      ["Producent", p.developer],
      ["Rok wydania", p.releaseYear],
      ["Klasyfikacja wiekowa", `PEGI ${p.pegi}`],
      ["Wersja", "Pudełkowa"],
    ],
  },
  tshirts: {
    key: "tshirts",
    label: "T-shirty",
    singular: "T-shirt",
    path: `${BASE_PATH}/t-shirts`,
    items: TSHIRTS,
    intro:
      "Bawełniane t-shirty Classic w dziesięciu kolorach i rozmiarach od S do XXL. Wygodna baza na każdy dzień.",
    facets: [
      { key: "color", label: "Kolor", type: "color", getValues: (p) => [p.color.name] },
      { key: "size", label: "Rozmiar", order: TSHIRT_SIZES, getValues: (p) => p.sizes },
    ],
    meta: (p) => `Rozmiary: ${p.sizes.join(", ")}`,
    specs: (p) => [
      ["Kolor", p.color.name],
      ["Dostępne rozmiary", p.sizes.join(", ")],
      ["Materiał", p.material],
      ["Krój", "Klasyczny, okrągły dekolt"],
      ["Pielęgnacja", "Pranie w 40°C"],
    ],
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export const getCategory = (product) => CATEGORIES[product.category];

// Facet for mixed-category listings (sale, search results)
export const CATEGORY_FACET = {
  key: "category",
  label: "Kategoria",
  getValues: (p) => [CATEGORIES[p.category].label],
};

export const getSpecs = (product) =>
  getCategory(product)
    .specs(product)
    .filter(([, value]) => value !== undefined && value !== null && value !== "");

export const getProductMeta = (product) => getCategory(product).meta(product);

export const isOnSale = (product) => Boolean(product.oldPrice && product.oldPrice > product.price);

export const requiresSize = (product) => Array.isArray(product.sizes) && product.sizes.length > 0;

export const SALE_PRODUCTS = ALL_PRODUCTS.filter(isOnSale);

// "Featured" — bestsellers and new arrivals first, out-of-stock products always last
const featuredScore = (p) =>
  (p.stock > 0 ? 100 : 0) + (p.isBestseller ? 10 : 0) + (p.isNew ? 5 : 0) + (isOnSale(p) ? 3 : 0);

export const SORT_OPTIONS = [
  { value: "featured", label: "Polecane", compare: (a, b) => featuredScore(b) - featuredScore(a) },
  { value: "price-asc", label: "Cena: od najniższej", compare: (a, b) => a.price - b.price },
  { value: "price-desc", label: "Cena: od najwyższej", compare: (a, b) => b.price - a.price },
  { value: "newest", label: "Najnowsze", compare: (a, b) => b.addedAt.localeCompare(a.addedAt) },
  { value: "name", label: "Nazwa: A–Z", compare: (a, b) => a.itemName.localeCompare(b.itemName, "pl") },
];

export const sortProducts = (items, sortValue) => {
  const option = SORT_OPTIONS.find((o) => o.value === sortValue) || SORT_OPTIONS[0];
  return [...items].sort(option.compare);
};

export const getBestsellers = (limit) =>
  sortProducts(ALL_PRODUCTS.filter((p) => p.isBestseller && p.stock > 0), "featured").slice(0, limit);

export const getRelatedProducts = (product, limit = 5) =>
  sortProducts(
    getCategory(product).items.filter((p) => p.id !== product.id),
    "featured",
  ).slice(0, limit);

const normalize = (text) =>
  String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ł/g, "l");

const SEARCH_INDEX = new Map(
  ALL_PRODUCTS.map((p) => [
    p.id,
    normalize(
      [
        p.itemName,
        p.author,
        p.topic,
        p.genre,
        p.developer,
        p.color?.name,
        CATEGORIES[p.category].label,
        CATEGORIES[p.category].singular,
      ]
        .filter(Boolean)
        .join(" "),
    ),
  ]),
);

// Every query word must appear in the product name or attributes (Polish diacritics are ignored)
export const searchProducts = (query, limit) => {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const results = sortProducts(
    ALL_PRODUCTS.filter((p) => words.every((w) => SEARCH_INDEX.get(p.id).includes(w))),
    "featured",
  );
  return limit ? results.slice(0, limit) : results;
};
