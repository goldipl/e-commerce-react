import styled from "styled-components";

export const SuccessHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  padding: 40px 24px;
  border-radius: var(--radius-lg);
  background: var(--success-soft);
  text-align: center;

  > svg {
    font-size: 56px;
    color: var(--success);
  }

  h1 {
    margin: 4px 0;
    font-size: 30px;
  }

  p {
    margin: 0;
    max-width: 520px;
    line-height: 1.6;
    color: var(--text);
  }

  strong {
    color: var(--ink);
  }
`;

export const OrderGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 24px;
  align-items: start;

  h2 {
    margin: 0 0 16px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ItemsTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  font-size: 14px;

  td {
    padding: 10px 8px;
    border-bottom: 1px solid var(--border);
    vertical-align: middle;
  }

  td:first-child {
    width: 52px;
    padding-left: 0;
  }

  td:last-child {
    padding-right: 0;
    text-align: right;
    font-weight: 600;
    white-space: nowrap;
  }

  td:nth-child(3) {
    color: var(--muted);
    white-space: nowrap;
  }

  img {
    display: block;
    width: 44px;
    height: 58px;
    padding: 3px;
    border-radius: 6px;
    background: var(--surface-2);
    object-fit: contain;
  }

  small {
    display: block;
    color: var(--muted);
  }
`;

export const InfoList = styled.dl`
  margin: 0 0 20px;
  font-size: 14px;

  dt {
    margin-top: 14px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  dt:first-child {
    margin-top: 0;
  }

  dd {
    margin: 4px 0 0;
    line-height: 1.5;
    color: var(--ink);
  }
`;
