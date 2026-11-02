import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineCar,
  AiOutlineUndo,
  AiOutlineSafety,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import {
  BASE_PATH,
  getCategory,
  getProductById,
  getProductMeta,
  getRelatedProducts,
  getSpecs,
  isOnSale,
  productPath,
  requiresSize,
} from "../../data/catalog";
import { TSHIRTS, TSHIRT_SIZES, TSHIRT_SIZE_CHART } from "../../data/tshirts";
import { DELIVERY_METHODS, FREE_SHIPPING_THRESHOLD } from "../../data/checkout";
import { formatPrice } from "../../utils/format";
import { usePageTitle } from "../../hooks/usePageTitle";
import { ItemShop } from "../../components/item/ItemShop/ItemShop";
import { ProductGrid } from "../../components/item/ItemShop/ItemShopStyles";
import {
  Breadcrumbs,
  Button,
  ButtonLink,
  EmptyState,
  IconButton,
  PriceTag,
  ProductBadges,
  QuantityStepper,
  StockInfo,
} from "../../components/ui";
import {
  ProductLayout,
  ImageColumn,
  InfoColumn,
  ProductMeta,
  ProductName,
  PriceSection,
  OmnibusNote,
  OptionGroup,
  ColorOptions,
  ColorOption,
  SizeOptions,
  SizeOption,
  SizeChart,
  FieldError,
  ActionsRow,
  InCartNote,
  Perks,
  TabsBar,
  TabPanel,
  SpecTable,
  RelatedSection,
  SectionHeader,
} from "./ProductStyles";

const TABS = [
  { id: "description", label: "Opis" },
  { id: "specs", label: "Specyfikacja" },
  { id: "delivery", label: "Dostawa i zwroty" },
];

export const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);

  // `key` resets the selected size and quantity when moving between products
  return product ? <ProductDetails key={product.id} product={product} /> : <ProductNotFound id={id} />;
};

const ProductNotFound = ({ id }) => {
  usePageTitle("Nie znaleziono produktu");
  return (
    <div className="wrapper">
      <EmptyState
        icon={AiOutlineQuestionCircle}
        title="Nie znaleziono produktu"
        action={<ButtonLink to={`${BASE_PATH}/`}>Wróć do strony głównej</ButtonLink>}
      >
        Produkt o ID {id} nie istnieje w naszym katalogu lub został wycofany ze sprzedaży.
      </EmptyState>
    </div>
  );
};

const ProductDetails = ({ product }) => {
  const { addItemToCart, getQuantityInCart, toggleWishlist, isInWishlist } = useContext(ShopContext);
  const [size, setSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  usePageTitle(product.itemName);

  const category = getCategory(product);
  const needsSize = requiresSize(product);
  const inCart = getQuantityInCart(product.id);
  const maxQuantity = Math.max(1, product.stock - inCart);
  const soldOut = product.stock <= 0;
  const canAddMore = !soldOut && product.stock - inCart > 0;
  const liked = isInWishlist(product.id);
  const related = getRelatedProducts(product);

  const handleAdd = () => {
    if (needsSize && !size) {
      setSizeError(true);
      return;
    }
    addItemToCart(product.id, { size, quantity });
    setQuantity(1);
  };

  return (
    <div className="wrapper">
      <Breadcrumbs
        items={[
          ["Strona główna", `${BASE_PATH}/`],
          [category.label, category.path],
          [product.itemName],
        ]}
      />

      <ProductLayout>
        <ImageColumn>
          <ProductBadges product={product} />
          <img src={product.itemImage} alt={product.itemName} width="420" height="560" />
        </ImageColumn>

        <InfoColumn>
          <ProductMeta>
            <Link to={category.path}>{category.singular}</Link>
            <span>{getProductMeta(product)}</span>
          </ProductMeta>
          <ProductName>{product.itemName}</ProductName>

          <PriceSection>
            <PriceTag product={product} size="lg" />
            {isOnSale(product) && (
              <>
                <p>Oszczędzasz {formatPrice(product.oldPrice - product.price)}</p>
                <OmnibusNote>
                  Najniższa cena z 30 dni przed obniżką: {formatPrice(product.oldPrice)}
                </OmnibusNote>
              </>
            )}
            <StockInfo stock={product.stock} detailed />
          </PriceSection>

          {product.color && (
            <OptionGroup>
              <span>
                Kolor: <strong>{product.color.name}</strong>
              </span>
              <ColorOptions>
                {TSHIRTS.map((variant) => (
                  <ColorOption
                    key={variant.id}
                    to={productPath(variant.id)}
                    $hex={variant.color.hex}
                    $active={variant.id === product.id}
                    aria-label={variant.color.name}
                    aria-current={variant.id === product.id ? "true" : undefined}
                    title={variant.color.name}
                  />
                ))}
              </ColorOptions>
            </OptionGroup>
          )}

          {needsSize && (
            <OptionGroup>
              <span id="size-label">
                Rozmiar: <strong>{size || "wybierz"}</strong>
              </span>
              <SizeOptions role="radiogroup" aria-labelledby="size-label">
                {TSHIRT_SIZES.map((s) => {
                  const available = product.sizes.includes(s);
                  return (
                    <SizeOption
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={size === s}
                      $active={size === s}
                      disabled={!available || soldOut}
                      title={available ? undefined : "Rozmiar niedostępny"}
                      onClick={() => {
                        setSize(s);
                        setSizeError(false);
                      }}
                    >
                      {s}
                    </SizeOption>
                  );
                })}
              </SizeOptions>
              {sizeError && <FieldError role="alert">Wybierz rozmiar, aby dodać produkt do koszyka.</FieldError>}
              <SizeChart>
                <summary>Tabela rozmiarów</summary>
                <table>
                  <thead>
                    <tr>
                      <th>Rozmiar</th>
                      <th>Szerokość (cm)</th>
                      <th>Długość (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TSHIRT_SIZE_CHART.map((row) => (
                      <tr key={row.size}>
                        <td>{row.size}</td>
                        <td>{row.width}</td>
                        <td>{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Wymiary orientacyjne, mierzone na płasko. Tolerancja ±2 cm.</p>
              </SizeChart>
            </OptionGroup>
          )}

          <ActionsRow>
            {canAddMore && (
              <QuantityStepper value={Math.min(quantity, maxQuantity)} onChange={setQuantity} max={maxQuantity} />
            )}
            <Button type="button" onClick={handleAdd} disabled={!canAddMore} style={{ flex: 1 }}>
              <AiOutlineShoppingCart />
              {soldOut ? "Produkt niedostępny" : canAddMore ? "Dodaj do koszyka" : "Maksymalna ilość w koszyku"}
            </Button>
            <IconButton
              type="button"
              $size="48px"
              $active={liked}
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={liked}
              aria-label={liked ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
            >
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </IconButton>
          </ActionsRow>
          {inCart > 0 && (
            <InCartNote>
              Masz już ten produkt w koszyku ({inCart} szt.). <Link to={`${BASE_PATH}/cart`}>Przejdź do koszyka</Link>
            </InCartNote>
          )}

          <Perks>
            <li>
              <AiOutlineCar aria-hidden="true" />
              <span>
                <strong>Darmowa dostawa</strong> od {formatPrice(FREE_SHIPPING_THRESHOLD)}, wysyłka w 24 h
              </span>
            </li>
            <li>
              <AiOutlineUndo aria-hidden="true" />
              <span>
                <strong>30 dni</strong> na bezpłatny zwrot
              </span>
            </li>
            <li>
              <AiOutlineSafety aria-hidden="true" />
              <span>
                <strong>Bezpieczne płatności</strong> — BLIK, przelew, karta
              </span>
            </li>
          </Perks>
        </InfoColumn>
      </ProductLayout>

      <section>
        <TabsBar role="tablist" aria-label="Informacje o produkcie">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </TabsBar>
        <TabPanel role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          {activeTab === "description" && <p>{product.description}</p>}
          {activeTab === "specs" && (
            <SpecTable>
              <tbody>
                {getSpecs(product).map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Kod produktu</th>
                  <td>BI-{product.id}</td>
                </tr>
              </tbody>
            </SpecTable>
          )}
          {activeTab === "delivery" && (
            <>
              <SpecTable>
                <tbody>
                  {DELIVERY_METHODS.map((method) => (
                    <tr key={method.id}>
                      <th scope="row">{method.label}</th>
                      <td>
                        {method.price === 0 ? "Bezpłatnie" : formatPrice(method.price)}
                        {method.freeAboveThreshold && ` · gratis od ${formatPrice(FREE_SHIPPING_THRESHOLD)}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </SpecTable>
              <p>
                Produkt możesz zwrócić w ciągu 30 dni od otrzymania przesyłki, bez podawania przyczyny.{" "}
                <Link to={`${BASE_PATH}/help/returns`}>Zobacz zasady zwrotów</Link>
              </p>
            </>
          )}
        </TabPanel>
      </section>

      {related.length > 0 && (
        <RelatedSection>
          <SectionHeader>
            <h2>Podobne produkty</h2>
            <Link to={category.path}>Zobacz wszystkie</Link>
          </SectionHeader>
          <ProductGrid>
            {related.map((item) => (
              <ItemShop key={item.id} {...item} />
            ))}
          </ProductGrid>
        </RelatedSection>
      )}
    </div>
  );
};
