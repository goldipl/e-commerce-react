import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 64px;
  background: var(--ink);
  color: #c9c8d3;
  font-size: 14px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr repeat(3, 1fr);
  gap: 32px;
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 32px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  h2 {
    margin: 0 0 16px;
    font-size: 24px;
    color: #ffffff;
  }

  h3 {
    margin: 0 0 14px;
    font-size: 15px;
    color: #ffffff;
  }

  p {
    margin: 0;
    max-width: 320px;
    line-height: 1.6;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: #c9c8d3;
    text-decoration: none;

    &:hover {
      color: var(--lime);
    }
  }
`;

export const PaymentList = styled.ul`
  && {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
  }

  li {
    padding: 4px 10px;
    border: 1px solid #34344a;
    border-radius: 6px;
    font-size: 12px;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
  padding: 20px 0 28px;
  border-top: 1px solid #26263a;
  font-size: 13px;
  color: #8a8a94;
`;
