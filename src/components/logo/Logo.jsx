import React, { useId } from "react";
import styled from "styled-components";

/**
 * BuyIt mark: a shopping bag with a check mark. Kept in sync with public/favicon.svg
 * and the PNG app icons in public/ (regenerate them if the shape changes).
 */
export const LogoMark = ({ size = 40 }) => {
  // useId keeps gradient ids unique when the logo renders more than once (header + footer)
  const gradientId = `buyit-mark-${useId().replace(/:/g, "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7263ff" />
          <stop offset="1" stopColor="#4232e0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
      <path
        d="M24 27v-5.5a8 8 0 0 1 16 0V27"
        fill="none"
        stroke="#c6ff3d"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M17.6 25h28.8a3 3 0 0 1 3 2.8l1.4 20.4a4.5 4.5 0 0 1-4.5 4.8H17.7a4.5 4.5 0 0 1-4.5-4.8l1.4-20.4a3 3 0 0 1 3-2.8z"
        fill="#fff"
      />
      <path
        d="M25 38.5l5 5 9.5-9.5"
        fill="none"
        stroke="#5b4cff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo = ({ inverted = false, showTagline = true, size = 40 }) => (
  <LogoWrapper $inverted={inverted}>
    <LogoMark size={size} />
    <LogoText>
      <strong>
        Buy<span>It</span>
      </strong>
      {showTagline && <small>gry · książki · t-shirty</small>}
    </LogoText>
  </LogoWrapper>
);

const LogoWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ $inverted }) => ($inverted ? "#ffffff" : "var(--ink)")};

  svg {
    flex-shrink: 0;
    filter: drop-shadow(0 4px 10px rgba(91, 76, 255, 0.28));
  }

  strong span {
    color: ${({ $inverted }) => ($inverted ? "var(--lime)" : "var(--accent)")};
  }

  small {
    color: ${({ $inverted }) => ($inverted ? "#8a8a94" : "var(--muted)")};
  }
`;

const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1;

  strong {
    font-family: var(--font-body);
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.045em;
  }

  small {
    margin-top: 4px;
    font-family: var(--font-body);
    font-size: 9.5px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    strong {
      font-size: 22px;
    }

    small {
      display: none;
    }
  }
`;
