import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  ItemContainer,
  ImageContainer,
  BadgesOverlay,
  WishlistBtn,
  CardBody,
  MetaLine,
  NameLink,
  PriceRow,
  InCartNote,
  CardActions,
} from "./ItemShopStyles";
import { ShopContext } from "../../../context/ShopContext";
import { getProductMeta, productPath, requiresSize } from "../../../data/catalog";
import { Button, ButtonLink, PriceTag, ProductBadges, StockInfo } from "../../ui";

export const ItemShop = (product) => {
  const { id, itemName, itemImage, stock } = product;
  const { addItemToCart, getQuantityInCart, toggleWishlist, isInWishlist } = useContext(ShopContext);

  const inCart = getQuantityInCart(id);
  const liked = isInWishlist(id);
  const href = productPath(id);

  return (
    <ItemContainer $unavailable={stock <= 0}>
      <ImageContainer to={href} tabIndex={-1} aria-hidden="true">
        <img src={itemImage} alt="" loading="lazy" width="300" height="400" />
      </ImageContainer>
      <BadgesOverlay>
        <ProductBadges product={product} />
      </BadgesOverlay>
      <WishlistBtn
        type="button"
        onClick={() => toggleWishlist(id)}
        $active={liked}
        aria-pressed={liked}
        aria-label={liked ? `Usuń ${itemName} z ulubionych` : `Dodaj ${itemName} do ulubionych`}
      >
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
      </WishlistBtn>

      <CardBody>
        <MetaLine>{getProductMeta(product)}</MetaLine>
        <NameLink as={Link} to={href}>
          {itemName}
        </NameLink>
        <PriceRow>
          <PriceTag product={product} />
        </PriceRow>
        <StockInfo stock={stock} />
      </CardBody>

      <CardActions>
        {stock <= 0 ? (
          <Button $variant="secondary" $size="sm" $block disabled>
            Niedostępny
          </Button>
        ) : requiresSize(product) ? (
          <ButtonLink to={href} $variant="secondary" $size="sm" $block>
            Wybierz rozmiar
          </ButtonLink>
        ) : (
          <Button type="button" $size="sm" $block onClick={() => addItemToCart(id)}>
            <AiOutlineShoppingCart />
            Do koszyka
          </Button>
        )}
        {inCart > 0 && <InCartNote>W koszyku: {inCart} szt.</InCartNote>}
      </CardActions>
    </ItemContainer>
  );
};
