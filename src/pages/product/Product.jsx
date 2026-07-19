import React, { useContext, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import { BOOKS } from "../../data/books";
import { PS5GAMES } from "../../data/games";
import { TSHIRTS } from "../../data/tshirts";
import { ItemShop } from "../../components/item/ItemShop/ItemShop";
import {
  ProductWrapper,
  Breadcrumbs,
  ProductLayout,
  ImageColumn,
  InfoColumn,
  ProductId,
  ProductName,
  ProductPrice,
  ActionsRow,
  AddToCartBtn,
  QuantityControls,
  QtyBtn,
  QtyValue,
  ViewCartLink,
  RelatedSection,
  RelatedTitle,
  RelatedGrid,
  NotFoundBox,
} from "./ProductStyles";

// Mapa kategorii — powiązanie listy produktów ze ścieżką w routingu i etykietą do wyświetlenia
const CATEGORIES = [
  { key: "books", label: "Books", path: "/e-commerce-react/books", items: BOOKS },
  { key: "games", label: "Games", path: "/e-commerce-react/games", items: PS5GAMES },
  { key: "tshirts", label: "T-shirts", path: "/e-commerce-react/t-shirts", items: TSHIRTS },
];

export const Product = () => {
  const { id } = useParams();
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(ShopContext);

  const numericId = Number(id);

  // Znajdujemy produkt i jego kategorię przeszukując wszystkie trzy listy po id
  const { product, category } = useMemo(() => {
    for (const cat of CATEGORIES) {
      const found = cat.items.find((item) => item.id === numericId);
      if (found) return { product: found, category: cat };
    }
    return { product: null, category: null };
  }, [numericId]);

  // Podobne produkty: max 5 losowych z tej samej kategorii, bez bieżącego produktu
  const relatedItems = useMemo(() => {
    if (!category) return [];
    return category.items
      .filter((item) => item.id !== numericId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }, [category, numericId]);

  if (!product) {
    return (
      <div className="wrapper">
        <NotFoundBox>
          <h2>Nie znaleziono produktu</h2>
          <p>Produkt o ID {id} nie istnieje w naszym katalogu.</p>
          <Link to="/e-commerce-react/">Wróć do strony głównej</Link>
        </NotFoundBox>
      </div>
    );
  }

  const quantityInCart = cartItems[product.id] || 0;

  return (
    <div className="wrapper">
      <ProductWrapper>
        <Breadcrumbs>
          <Link to="/e-commerce-react/">Home</Link>
          <span>/</span>
          <Link to={category.path}>{category.label}</Link>
          <span>/</span>
          <span>{product.itemName}</span>
        </Breadcrumbs>

        <ProductLayout>
          <ImageColumn>
            <img src={product.itemImage} alt={product.itemName} width="320" height="448" />
          </ImageColumn>

          <InfoColumn>
            <ProductId>ID: {product.id}</ProductId>
            <ProductName>{product.itemName}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>

            <ActionsRow>
              {quantityInCart === 0 ? (
                <AddToCartBtn onClick={() => addItemToCart(product.id)}>
                  <AiOutlineShoppingCart />
                  Dodaj do koszyka
                </AddToCartBtn>
              ) : (
                <QuantityControls>
                  <QtyBtn
                    onClick={() => removeItemFromCart(product.id)}
                    aria-label="Zmniejsz ilość"
                  >
                    <AiOutlineMinus />
                  </QtyBtn>
                  <QtyValue>{quantityInCart}</QtyValue>
                  <QtyBtn
                    onClick={() => addItemToCart(product.id)}
                    aria-label="Zwiększ ilość"
                  >
                    <AiOutlinePlus />
                  </QtyBtn>
                </QuantityControls>
              )}
              {quantityInCart > 0 && (
                <ViewCartLink to="/e-commerce-react/cart">
                  Zobacz koszyk ({quantityInCart})
                </ViewCartLink>
              )}
            </ActionsRow>
          </InfoColumn>
        </ProductLayout>

        {relatedItems.length > 0 && (
          <RelatedSection>
            <RelatedTitle>Podobne produkty</RelatedTitle>
            <RelatedGrid>
              {relatedItems.map((item) => (
                <ItemShop key={item.id} {...item} />
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </ProductWrapper>
    </div>
  );
};
