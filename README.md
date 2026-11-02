<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/img/logo/buyit_logo_dark.png" />
    <img src="src/assets/img/logo/buyit_logo.png" alt="BuyIt" width="400" />
  </picture>
</p>

# BuyIt — e-commerce store (React)

A demo online store selling PS5 games, programming books and cotton t-shirts. The shop UI is in
Polish and prices are in PLN. There is no backend: the catalog lives in `src/data`, and the cart,
wishlist and orders are stored in the browser's `localStorage`.

**Live demo:** https://goldipl.github.io/e-commerce-react/

> This is a demo project. Orders are not fulfilled, no payment is taken, and checkout form data
> never leaves the browser.

## Getting started

```bash
npm install
npm run dev
```

The dev server serves the app under `/e-commerce-react/` (see `base` in `vite.config.js`).

Production build:

```bash
npm run build
```

### Deploying to GitHub Pages

The site is served from the `gh-pages` branch. Build the app and publish the contents of `dist/`
to the root of that branch:

```bash
npm run build
npx gh-pages -d dist
```

`base` in `vite.config.js` must match the repository name, otherwise the published page loads
its scripts and icons from the wrong path.

## Features

**Catalog and browsing**

- Category pages for books, games and t-shirts, plus a sale page and a search results page — all
  built on one shared `ProductListing` component
- Category-specific filters (book topic, game genre and PEGI rating, t-shirt color and size) with
  live counts, plus price range, "on sale" and "in stock" filters
- Sorting by featured, price, newest and name
- Filter and sort state is kept in the URL, so a filtered view can be shared or bookmarked
- Header search with live suggestions and arrow-key navigation; it ignores Polish diacritics
  (`zolty` finds `Żółty`)

**Product page**

- T-shirt variants: color swatches that link between colors, size picker with unavailable sizes
  disabled, and a size chart
- Stock status (in stock / last items / sold out), with cart quantities capped at available stock
- Sale prices with the lowest price from the 30 days before the discount (EU Omnibus directive)
- Description, specification and delivery tabs, plus related products

**Cart and checkout**

- Cart lines per product variant (e.g. the same t-shirt in M and L), with quantity steppers
- Promo codes: `BUYIT10` (−10%) and `DOSTAWA0` (free delivery)
- Free delivery threshold (200 zł) with a progress bar
- Checkout with contact details, delivery method (parcel locker, courier, in-store pickup) and
  payment method (BLIK, bank transfer, card, cash on delivery for courier only)
- Validation rules that depend on the delivery method: the courier needs an address, the parcel
  locker needs a locker code
- Order confirmation page with the order number and a full summary

**Other**

- Wishlist, toast notifications, help center pages (delivery, returns, contact, terms) and a 404
  page
- Per-page document titles, scroll restoration on navigation, responsive layout with a slide-in
  filter drawer on mobile

## Project structure

```
src/
├── components/
│   ├── bottombar/       — category navigation under the header
│   ├── common/          — ScrollToTop
│   ├── footer/
│   ├── header/          — announcement bar, logo, search, wishlist and cart
│   ├── home/            — hero carousel and home page sections
│   ├── item/
│   │   ├── ItemCart/    — cart line
│   │   └── ItemShop/    — product card and product grid
│   ├── listing/         — ProductListing: filters, sorting, active filter chips
│   ├── logo/            — SVG logo mark and wordmark
│   ├── searchbar/
│   ├── summary/         — order totals shared by cart, checkout and confirmation
│   ├── toast/
│   └── ui/              — buttons, quantity stepper, price, badges, breadcrumbs, empty state
├── context/
│   └── ShopContext.jsx  — cart, wishlist, promo code, orders, toasts
├── data/
│   ├── books.js, games.js, tshirts.js — product data
│   ├── catalog.js       — category config, facets, specs, sorting, search
│   └── checkout.js      — delivery and payment methods, promo codes, computeTotals()
├── hooks/
│   └── usePageTitle.js
├── pages/
│   ├── cart/  category/  checkout/  help/  home/
│   ├── notfound/  order/  product/  search/  wishlist/
└── utils/
    └── format.js        — PLN price formatting, Polish plurals, dates
```

### Icons

`public/` holds the favicon (`favicon.svg`, `favicon.ico`), the iOS home screen icon
(`apple-touch-icon.png`, 180×180, full-bleed with no transparency) and the web app manifest icons
(`icons/`, including a maskable variant). They are all drawn from the same mark as
`src/components/logo/Logo.jsx`, so change both together.

### Adding a product or category

Products are plain objects in `src/data/*.js`. A category is described once in
`CATEGORIES` in `src/data/catalog.js` — its route, label, filters (`facets`), product card caption
(`meta`) and specification table (`specs`). Listings, navigation, the footer and product pages all
read from that config.

## Routes

All routes use a hash router under the `/e-commerce-react` prefix:

| Path | Page |
| --- | --- |
| `/` | Home |
| `/books`, `/games`, `/t-shirts` | Category listing |
| `/sale` | Products on sale |
| `/search?q=…` | Search results |
| `/product/:id` | Product page |
| `/cart` | Cart |
| `/checkout` | Checkout |
| `/order/:number` | Order confirmation |
| `/wishlist` | Wishlist |
| `/help/:topic` | Help center (`delivery`, `returns`, `contact`, `terms`) |

## Tech stack

React 18, React Router 6, styled-components 6, Swiper 11, react-icons, Vite 5.
