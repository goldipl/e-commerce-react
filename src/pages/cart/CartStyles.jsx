import styled from "styled-components";
import { Card } from "../../components/ui";

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const CartListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
  }
`;

export const CartList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SummaryCard = styled(Card)`
  position: sticky;
  top: 176px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  @media (max-width: 960px) {
    position: static;
  }
`;

export const ShippingProgress = styled.div`
  padding: 14px;
  border-radius: var(--radius);
  background: ${({ $done }) => ($done ? "var(--success-soft)" : "var(--surface-2)")};

  p {
    margin: 0 0 10px;
    font-size: 13px;
    color: var(--text);
  }

  strong {
    color: ${({ $done }) => ($done ? "var(--success)" : "var(--ink)")};
  }

  div {
    height: 6px;
    border-radius: 999px;
    background: rgba(15, 15, 26, 0.08);
    overflow: hidden;
  }

  span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: ${({ $done }) => ($done ? "var(--success)" : "var(--accent)")};
    transition: width 0.4s ease;
  }
`;

export const PromoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border);

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
  }

  div {
    display: flex;
    gap: 8px;
  }

  input {
    flex: 1;
    min-width: 0;
    height: 38px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 10px;
    font-size: 14px;
    text-transform: uppercase;

    &::placeholder {
      text-transform: none;
    }

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }
`;

export const PromoApplied = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 14px;

  button {
    display: flex;
    padding: 4px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: rgba(31, 157, 85, 0.12);
    }
  }
`;

export const PromoMessage = styled.p`
  margin: -8px 0 0;
  font-size: 13px;
  color: ${({ $ok }) => ($ok ? "var(--success)" : "var(--danger)")};
`;

export const SecondarySection = styled.section`
  margin-top: 48px;

  h2 {
    margin: 0 0 20px;
    font-size: 24px;
  }
`;
