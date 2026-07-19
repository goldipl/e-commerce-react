import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 380px;
  min-width: 140px;

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

  svg {
    position: absolute;
    left: 12px;
    font-size: 15px;
    color: #8a8a94;
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 0 12px 0 34px;
  border-radius: 999px;
  border: 1px solid #e4e2dc;
  background: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #0f0f1a;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #8a8a94;
  }

  &:focus {
    border-color: #5b4cff;
    box-shadow: 0 0 0 3px rgba(91, 76, 255, 0.12);
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background: #f2f1ec;
  color: #4a4a56;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #e4e2dc;
  }
`;

export const ResultsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #e4e2dc;
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(15, 15, 26, 0.14);
  overflow: hidden;
  z-index: 60;
  max-height: 420px;
  overflow-y: auto;
`;

export const ResultItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  text-decoration: none;
  border-bottom: 1px solid #f2f1ec;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f7f6f2;
  }

  img {
    width: 34px;
    height: 46px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
    background: #f2f1ec;
  }
`;

export const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;

  span:first-child {
    font-family: "Questrial", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #0f0f1a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:last-child {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: #5b4cff;
    font-weight: 700;
  }
`;

export const NoResults = styled.div`
  padding: 16px 12px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #8a8a94;
`;
