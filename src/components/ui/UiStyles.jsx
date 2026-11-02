import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonBase = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: ${({ $size }) => ($size === "sm" ? "38px" : "48px")};
  padding: 0 ${({ $size }) => ($size === "sm" ? "16px" : "24px")};
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: ${({ $size }) => ($size === "sm" ? "13px" : "15px")};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease;
  width: ${({ $block }) => ($block ? "100%" : "auto")};

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid rgba(91, 76, 255, 0.35);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  svg {
    font-size: 1.15em;
    flex-shrink: 0;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "secondary":
        return css`
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--ink);
          &:hover:not(:disabled) {
            border-color: var(--ink);
          }
        `;
      case "ghost":
        return css`
          border: 1px solid transparent;
          background: transparent;
          color: var(--accent);
          &:hover:not(:disabled) {
            background: var(--accent-soft);
          }
        `;
      case "dark":
        return css`
          border: 1px solid var(--ink);
          background: var(--ink);
          color: #ffffff;
          &:hover:not(:disabled) {
            background: #24243a;
          }
        `;
      default:
        return css`
          border: 1px solid var(--accent);
          background: var(--accent);
          color: #ffffff;
          &:hover:not(:disabled) {
            background: var(--accent-hover);
            border-color: var(--accent-hover);
          }
        `;
    }
  }}
`;

export const Button = styled.button`
  ${buttonBase}
`;

export const ButtonLink = styled(Link)`
  ${buttonBase}
`;

export const IconButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({ $size }) => $size || "40px"};
  height: ${({ $size }) => $size || "40px"};
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: ${({ $active }) => ($active ? "var(--danger)" : "var(--ink)")};
  font-size: 18px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    border-color: var(--ink);
  }

  &:active {
    transform: scale(0.92);
  }

  &:focus-visible {
    outline: 3px solid rgba(91, 76, 255, 0.35);
    outline-offset: 2px;
  }
`;

export const Stepper = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${({ $size }) => ($size === "sm" ? "36px" : "48px")};
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  overflow: hidden;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ $size }) => ($size === "sm" ? "32px" : "42px")};
    height: 100%;
    border: none;
    background: transparent;
    color: var(--ink);
    font-size: 14px;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: var(--surface-2);
    }

    &:disabled {
      color: var(--border);
      cursor: not-allowed;
    }
  }

  input {
    width: ${({ $size }) => ($size === "sm" ? "34px" : "44px")};
    height: 100%;
    border: none;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: var(--ink);
    background: transparent;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
      background: var(--accent-soft);
    }
  }
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 8px;

  strong {
    font-size: ${({ $size }) => ($size === "lg" ? "32px" : "18px")};
    font-weight: 700;
    color: ${({ $sale }) => ($sale ? "var(--danger)" : "var(--ink)")};
    letter-spacing: -0.01em;
  }

  s {
    font-size: ${({ $size }) => ($size === "lg" ? "17px" : "13px")};
    color: var(--muted);
  }
`;

export const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const BADGE_COLORS = {
  sale: css`
    background: var(--danger);
    color: #ffffff;
  `,
  new: css`
    background: var(--lime);
    color: var(--ink);
  `,
  bestseller: css`
    background: var(--ink);
    color: #ffffff;
  `,
  muted: css`
    background: var(--surface-2);
    color: var(--text);
  `,
};

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  ${({ $variant }) => BADGE_COLORS[$variant] || BADGE_COLORS.muted}
`;

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ $status }) =>
    $status === "out" ? "var(--danger)" : $status === "low" ? "var(--warning)" : "var(--success)"};

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
`;

export const BreadcrumbsNav = styled.nav`
  margin-bottom: 20px;
  font-size: 13px;
  color: var(--muted);

  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  li + li::before {
    content: "/";
    color: var(--border);
  }

  a {
    color: var(--muted);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }

  [aria-current="page"] {
    color: var(--ink);
    font-weight: 600;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const EmptyStateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 64px 24px;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  > svg {
    font-size: 44px;
    color: var(--accent);
    margin-bottom: 4px;
  }

  h2 {
    margin: 0;
    font-size: 22px;
  }

  p {
    margin: 0 0 8px;
    max-width: 420px;
    color: var(--text);
    line-height: 1.6;
  }
`;

export const Card = styled.section`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;

  @media (max-width: 600px) {
    padding: 18px;
    border-radius: var(--radius);
  }
`;

export const PageTitle = styled.h1`
  margin: 0 0 24px;
  font-size: 32px;
  color: var(--ink);

  small {
    margin-left: 8px;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 500;
    color: var(--muted);
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;
