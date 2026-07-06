import React from "react";
import { FooterContainer } from "./FooterStyles";
import { FooterYear } from "./FooterYear";

export const Footer = () => {
  return (
    <FooterContainer>
      <span>
        BuyIt © <FooterYear /> — made for people who like nice things.
      </span>
    </FooterContainer>
  );
};
