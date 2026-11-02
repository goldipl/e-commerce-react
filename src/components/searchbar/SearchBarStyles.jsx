import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 520px;
  min-width: 140px;

  form {
    width: 100%;
  }

  @media (max-width: 800px) {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  > svg {
    position: absolute;
    left: 14px;
    font-size: 17px;
    color: var(--muted);
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 40px 0 40px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 14px;
  color: var(--ink);
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: var(--muted);
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(91, 76, 255, 0.12);
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: var(--border);
  }
`;

export const ResultsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 16px 40px rgba(15, 15, 26, 0.14);
  overflow: hidden;
  z-index: 60;
  max-height: 480px;
  overflow-y: auto;
`;

export const ResultItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  text-decoration: none;
  border-bottom: 1px solid var(--surface-2);
  background: ${({ $active }) => ($active ? "var(--bg)" : "transparent")};

  &:hover {
    background: var(--bg);
  }

  img {
    width: 36px;
    height: 48px;
    object-fit: contain;
    border-radius: 4px;
    flex-shrink: 0;
    background: var(--surface-2);
  }

  > strong {
    margin-left: auto;
    font-size: 13px;
    color: var(--ink);
    white-space: nowrap;
  }
`;

export const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  span {
    font-size: 13.5px;
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    font-size: 12px;
    color: var(--muted);
  }
`;

export const NoResults = styled.div`
  padding: 18px 14px;
  text-align: center;
  font-size: 13px;
  color: var(--muted);
`;

export const ShowAllLink = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  background: var(--surface);
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--accent-soft);
  }
`;
