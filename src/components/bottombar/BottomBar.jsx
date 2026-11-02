import React from "react";
import { BottomBarContainer, BottomBarLinks, NavItem, Spacer } from "./BottomBarStyles";
import { BASE_PATH, CATEGORY_LIST } from "../../data/catalog";

export const BottomBar = () => {
  return (
    <BottomBarContainer aria-label="Kategorie">
      <BottomBarLinks>
        {CATEGORY_LIST.map((category) => (
          <NavItem key={category.key} to={category.path}>
            {category.label}
          </NavItem>
        ))}
        <NavItem to={`${BASE_PATH}/sale`} $highlight>
          Promocje
        </NavItem>
        <Spacer />
        <NavItem to={`${BASE_PATH}/help/delivery`} $muted>
          Dostawa i płatności
        </NavItem>
        <NavItem to={`${BASE_PATH}/help/contact`} $muted>
          Kontakt
        </NavItem>
      </BottomBarLinks>
    </BottomBarContainer>
  );
};
