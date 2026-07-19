import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #8a8a94;

  a {
    color: #8a8a94;
    text-decoration: none;
  }

  a:hover {
    color: #5b4cff;
  }

  span {
    color: #0f0f1a;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 220px;
  }
`;

export const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #e4e2dc;
  border-radius: 20px;
  padding: 24px;
  background: #ffffff;

  img {
    width: 100%;
    max-width: 320px;
    height: auto;
    border-radius: 12px;
    display: block;
  }

  @media (max-width: 800px) {
    padding: 16px;

    img {
      max-width: 240px;
      margin: 0 auto;
    }
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductId = styled.span`
  align-self: flex-start;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #5b4cff;
  background: #f0eeff;
  padding: 4px 10px;
  border-radius: 999px;
`;

export const ProductName = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  color: #0f0f1a;
  letter-spacing: -0.01em;
  line-height: 1.25;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const ProductPrice = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #0f0f1a;
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const AddToCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 28px;
  border-radius: 12px;
  border: none;
  background-color: #5b4cff;
  color: #ffffff;
  font-family: "Questrial", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #4638d6;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 48px;
  padding: 0 16px;
  border-radius: 12px;
  background: #f2f1ec;
`;

export const QtyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #0f0f1a;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #e4e2dc;
  }
`;

export const QtyValue = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #0f0f1a;
  min-width: 18px;
  text-align: center;
`;

export const ViewCartLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #5b4cff;
  text-decoration: underline;
`;

export const RelatedSection = styled.div`
  margin-top: 56px;
`;

export const RelatedTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #0f0f1a;
  margin: 0 0 20px;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 20px;
  text-align: center;

  h2 {
    font-size: 22px;
    color: #0f0f1a;
    margin: 0;
  }

  p {
    font-family: "Inter", sans-serif;
    color: #8a8a94;
    margin: 0;
  }
`;
