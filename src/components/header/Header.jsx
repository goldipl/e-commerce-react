import React, { useContext } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  HeaderContainer,
  AnnouncementBar,
  HeaderBar,
  LogoContainer,
  StyledLink,
  HeaderLinksContainer,
  HeaderIconLink,
  CounterItems,
  CartTotal,
} from "./HeaderStyles";
import { ShopContext } from "../../context/ShopContext";
import { SearchBar } from "../searchbar/SearchBar";
import { BottomBar } from "../bottombar/BottomBar";
import { BASE_PATH } from "../../data/catalog";
import { FREE_SHIPPING_THRESHOLD } from "../../data/checkout";
import { formatPrice } from "../../utils/format";
import { Logo } from "../logo/Logo";

export const Header = () => {
  const { totalQuantity, cartTotalPrice, wishlist } = useContext(ShopContext);

  return (
    <HeaderContainer>
      <AnnouncementBar>
        <span>Darmowa dostawa od {formatPrice(FREE_SHIPPING_THRESHOLD)}</span>
        <span>
          Kod <strong>BUYIT10</strong> = −10% na zamówienie
        </span>
        <span>30 dni na zwrot</span>
      </AnnouncementBar>
      <HeaderBar>
        <LogoContainer>
          <StyledLink to={`${BASE_PATH}/`} aria-label="BuyIt — strona główna">
            <Logo />
          </StyledLink>
        </LogoContainer>
        <SearchBar />
        <HeaderLinksContainer>
          <HeaderIconLink
            to={`${BASE_PATH}/wishlist`}
            aria-label={`Ulubione (${wishlist.length})`}
            title="Ulubione"
          >
            <AiOutlineHeart />
            <CounterItems>{wishlist.length > 0 ? wishlist.length : ""}</CounterItems>
          </HeaderIconLink>
          <HeaderIconLink
            to={`${BASE_PATH}/cart`}
            aria-label={`Koszyk (${totalQuantity})`}
            title="Koszyk"
            $wide
          >
            <AiOutlineShoppingCart />
            <CounterItems>{totalQuantity > 0 ? totalQuantity : ""}</CounterItems>
            <CartTotal>{totalQuantity > 0 ? formatPrice(cartTotalPrice) : "Koszyk"}</CartTotal>
          </HeaderIconLink>
        </HeaderLinksContainer>
      </HeaderBar>
      <BottomBar />
    </HeaderContainer>
  );
};
