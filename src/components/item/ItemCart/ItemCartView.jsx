import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  ItemCartContainer,
  ImageCartContainer,
  TextCartContainer,
  NameCartContainer,
  VariantLine,
  UnitPrice,
  LineControls,
  LineTotal,
  RemoveBtn,
} from "./ItemCartViewStyles";
import { ShopContext } from "../../../context/ShopContext";
import { getProductMeta, productPath } from "../../../data/catalog";
import { formatPrice } from "../../../utils/format";
import { QuantityStepper } from "../../ui";

export const ItemCartView = (item) => {
  const { lineKey, id, itemName, itemImage, price, size, quantity, summaryPrice, stock } = item;
  const { updateCartItemCount, removeAllItemsFromCart, getQuantityInCart } = useContext(ShopContext);

  // Maximum for this line = stock minus what other sizes of the same product already take
  const maxForLine = stock - (getQuantityInCart(id) - quantity);

  return (
    <ItemCartContainer>
      <ImageCartContainer to={productPath(id)} tabIndex={-1} aria-hidden="true">
        <img src={itemImage} alt="" width="90" height="120" />
      </ImageCartContainer>
      <TextCartContainer>
        <NameCartContainer as={Link} to={productPath(id)}>
          {itemName}
        </NameCartContainer>
        <VariantLine>
          {size ? (
            <>
              Kolor: <strong>{item.color?.name}</strong> · Rozmiar: <strong>{size}</strong>
            </>
          ) : (
            getProductMeta(item)
          )}
        </VariantLine>
        <UnitPrice>{formatPrice(price)} / szt.</UnitPrice>
      </TextCartContainer>
      <LineControls>
        <QuantityStepper
          size="sm"
          value={quantity}
          min={1}
          max={maxForLine}
          onChange={(value) => updateCartItemCount(value, lineKey)}
          label={`Ilość: ${itemName}`}
        />
        <LineTotal>{formatPrice(summaryPrice)}</LineTotal>
        <RemoveBtn
          type="button"
          onClick={() => removeAllItemsFromCart(lineKey)}
          aria-label={`Usuń ${itemName} z koszyka`}
          title="Usuń z koszyka"
        >
          <RiDeleteBin6Line />
        </RemoveBtn>
      </LineControls>
    </ItemCartContainer>
  );
};
