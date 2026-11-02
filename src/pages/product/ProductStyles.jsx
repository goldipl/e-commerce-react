import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
`;

export const ImageColumn = styled.div`
  position: sticky;
  top: 176px;
  display: flex;
  justify-content: center;
  padding: 40px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);

  > div {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  img {
    width: 100%;
    max-width: 420px;
    height: auto;
    aspect-ratio: 3 / 4;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    padding: 24px;

    img {
      max-width: 280px;
    }
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export const ProductMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text);

  a {
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const ProductName = styled.h1`
  margin: -8px 0 0;
  font-size: 34px;
  line-height: 1.2;
  color: var(--ink);

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--danger);
  }
`;

export const OmnibusNote = styled.span`
  font-size: 12px;
  color: var(--muted);
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: var(--text);

  strong {
    color: var(--ink);
  }
`;

export const ColorOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ColorOption = styled(Link)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $hex }) => $hex};
  border: 1px solid rgba(15, 15, 26, 0.2);
  box-shadow: ${({ $active }) => ($active ? "0 0 0 2px var(--bg), 0 0 0 4px var(--ink)" : "none")};
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SizeOption = styled.button`
  min-width: 52px;
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${({ $active }) => ($active ? "var(--ink)" : "var(--border)")};
  border-radius: 10px;
  background: ${({ $active }) => ($active ? "var(--ink)" : "var(--surface)")};
  color: ${({ $active }) => ($active ? "#ffffff" : "var(--ink)")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: var(--ink);
  }

  &:disabled {
    color: var(--muted);
    background: var(--surface-2);
    text-decoration: line-through;
    cursor: not-allowed;
  }
`;

export const SizeChart = styled.details`
  font-size: 13px;

  summary {
    width: max-content;
    color: var(--accent);
    font-weight: 600;
    cursor: pointer;
  }

  table {
    width: 100%;
    max-width: 380px;
    margin-top: 12px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px 10px;
    border-bottom: 1px solid var(--border);
    text-align: left;
  }

  th {
    color: var(--muted);
    font-weight: 500;
  }

  p {
    margin: 8px 0 0;
    color: var(--muted);
  }
`;

export const FieldError = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--danger);
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    flex-wrap: wrap;

    > button:nth-child(2) {
      order: 3;
      flex-basis: 100%;
    }
  }
`;

export const InCartNote = styled.p`
  margin: -8px 0 0;
  font-size: 13px;
  color: var(--text);

  a {
    color: var(--accent);
    font-weight: 600;
  }
`;

export const Perks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 18px 20px;
  list-style: none;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--border);

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: var(--text);
  }

  svg {
    flex-shrink: 0;
    font-size: 20px;
    color: var(--accent);
  }

  strong {
    color: var(--ink);
  }
`;

export const TabsBar = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 56px;
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    position: relative;
    padding: 14px 16px;
    border: none;
    background: transparent;
    font-family: var(--font-heading);
    font-size: 16px;
    font-weight: 600;
    color: var(--muted);
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: var(--ink);
    }

    &[aria-selected="true"] {
      color: var(--ink);
    }

    &[aria-selected="true"]::after {
      content: "";
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 0;
      height: 2px;
      background: var(--accent);
    }
  }
`;

export const TabPanel = styled.div`
  padding: 24px 0;
  max-width: 760px;

  p {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--text);
  }

  a {
    color: var(--accent);
    font-weight: 600;
  }
`;

export const SpecTable = styled.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    text-align: left;
    vertical-align: top;
  }

  th {
    width: 40%;
    color: var(--muted);
    font-weight: 500;
  }

  td {
    color: var(--ink);
    font-weight: 500;
  }
`;

export const RelatedSection = styled.section`
  margin-top: 40px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 26px;
    color: var(--ink);
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 22px;
    }
  }
`;
