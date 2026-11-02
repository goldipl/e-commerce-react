import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemCartContainer = styled.li`
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr) auto;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 12px 14px;
  }
`;

export const ImageCartContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3 / 4;
  padding: 6px;
  border-radius: 10px;
  background: var(--surface-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    grid-row: span 2;
    align-self: start;
  }
`;

export const TextCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const NameCartContainer = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 1.3;
  color: var(--ink);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`;

export const VariantLine = styled.span`
  font-size: 13px;
  color: var(--muted);

  strong {
    color: var(--ink);
  }
`;

export const UnitPrice = styled.span`
  font-size: 13px;
  color: var(--text);
`;

export const LineControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    gap: 10px;
  }
`;

export const LineTotal = styled.strong`
  min-width: 90px;
  text-align: right;
  font-size: 16px;
  color: var(--ink);

  @media (max-width: 640px) {
    min-width: 0;
    margin-left: auto;
  }
`;

export const RemoveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: var(--danger-soft);
    color: var(--danger);
  }
`;
