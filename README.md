# BuyIt — sklep e-commerce (React)

## Uruchomienie

```bash
npm install
npm run dev
```

Build produkcyjny:

```bash
npm run build
```

## Co jest w projekcie

- **Wyszukiwarka** w headerze (`components/searchbar/SearchBar.jsx`) — podpowiedzi na żywo,
  Enter przenosi do pierwszego wyniku, Escape zamyka, klik poza komponentem zamyka dropdown.
- **Strona produktu** (`pages/product/Product.jsx`) — trasa `/e-commerce-react/product/:id`,
  breadcrumbs, sterowanie ilością w koszyku, sekcja "Podobne produkty" z tej samej kategorii.
- **Koszyk z localStorage** (`context/ShopContext.jsx`) — stan koszyka przeżywa odświeżenie strony.
- **Toast** przy dodaniu produktu do koszyka.

## Struktura

```
src/
├── components/
│   ├── bottombar/     — pasek nawigacji pod headerem
│   ├── footer/
│   ├── header/         — logo, wyszukiwarka, ikona koszyka
│   ├── home/
│   │   ├── swiper/      — karuzela na stronie głównej
│   │   └── top5/         — sekcje "Top 5" dla każdej kategorii
│   ├── item/
│   │   ├── ItemCart/    — pozycja w widoku koszyka
│   │   └── ItemShop/    — kafelek produktu na listach
│   └── searchbar/
├── context/
│   └── ShopContext.jsx  — cały stan sklepu (koszyk, wyszukiwarka)
├── data/                — BOOKS, PS5GAMES, TSHIRTS
└── pages/
    ├── cart/
    ├── home/
    ├── product/          — strona pojedynczego produktu
    └── shop/
        ├── books/
        ├── games/
        └── tshirts/
```
