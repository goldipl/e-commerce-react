import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ItemContainer,
  ImageContainer,
  TextContainer,
  IDContainer,
  NameContainer,
  PriceContainer,
  AddToCartBtn,
  ItemsCounter,
} from "./ItemShopStyles";
import { ShopContext } from "../../../context/ShopContext";

export const ItemShop = ({ id, itemName, price, itemImage }) => {
  const { addItemToCart, removeItemFromCart, cartItems } = useContext(ShopContext);

  return (
    <ItemContainer>
      <Link to={`/e-commerce-react/product/${id}`}>
        <ImageContainer>
          <img src={itemImage} alt={itemName} width="200" height="280" />
        </ImageContainer>
      </Link>
      <IDContainer>ID: {id}</IDContainer>
      <TextContainer>
        <NameContainer as={Link} to={`/e-commerce-react/product/${id}`}>
          {itemName}
        </NameContainer>
        <PriceContainer>
          Price: <strong>${price.toFixed(2)}</strong>
        </PriceContainer>
        <ItemsCounter
          onClick={() => removeItemFromCart(id)}
          title="Kliknij, aby zmniejszyć ilość w koszyku"
          style={{
            display: cartItems[id] === 0 || !cartItems[id] ? "none" : "flex",
            backgroundColor:
              cartItems[id] > 0 ? "#bbbbbb" : "rgba(255,255,255,0)",
          }}
        >
          {cartItems[id]}
        </ItemsCounter>
      </TextContainer>
      <AddToCartBtn onClick={() => addItemToCart(id)}>Add to cart</AddToCartBtn>
    </ItemContainer>
  );
};
