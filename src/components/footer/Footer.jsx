import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterGrid, FooterColumn, FooterBottom, PaymentList } from "./FooterStyles";
import { FooterYear } from "./FooterYear";
import { Logo } from "../logo/Logo";
import { BASE_PATH, CATEGORY_LIST } from "../../data/catalog";
import { PAYMENT_METHODS } from "../../data/checkout";
import { HELP_TOPICS } from "../../pages/help/helpTopics";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h2>
            <Logo inverted showTagline={false} size={36} />
          </h2>
          <p>
            Gry na PS5, książki o programowaniu i bawełniane t-shirty. Wysyłka w 24 h, darmowa
            dostawa od 200 zł i 30 dni na zwrot.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h3>Sklep</h3>
          <ul>
            {CATEGORY_LIST.map((category) => (
              <li key={category.key}>
                <Link to={category.path}>{category.label}</Link>
              </li>
            ))}
            <li>
              <Link to={`${BASE_PATH}/sale`}>Promocje</Link>
            </li>
            <li>
              <Link to={`${BASE_PATH}/wishlist`}>Ulubione</Link>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Pomoc</h3>
          <ul>
            {HELP_TOPICS.map((topic) => (
              <li key={topic.slug}>
                <Link to={`${BASE_PATH}/help/${topic.slug}`}>{topic.title}</Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Płatności</h3>
          <PaymentList>
            {PAYMENT_METHODS.map((method) => (
              <li key={method.id}>{method.label}</li>
            ))}
          </PaymentList>
        </FooterColumn>
      </FooterGrid>
      <FooterBottom>
        <span>
          BuyIt © <FooterYear /> — made for people who like nice things.
        </span>
        <span>Sklep demonstracyjny — zamówienia nie są realizowane.</span>
      </FooterBottom>
    </FooterContainer>
  );
};
