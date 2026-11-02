import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TrustList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px;
    border: 1px solid rgba(228, 226, 220, 0.8);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  svg {
    flex-shrink: 0;
    font-size: 26px;
    color: var(--accent);
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 13px;
    color: var(--muted);
  }

  strong {
    font-size: 14px;
    color: var(--ink);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    li {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      padding: 14px;
    }
  }
`;

const TILE_THEMES = {
  books: css`
    background: var(--accent-soft);
  `,
  games: css`
    background: #1b1b2b;
    color: #ffffff;

    p {
      color: rgba(255, 255, 255, 0.7);
    }
  `,
  tshirts: css`
    background: #eaffc0;
  `,
};

export const CategoryTilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const CategoryTile = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  min-height: 190px;
  padding: 24px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  color: var(--ink);
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  > div:first-child {
    position: relative;
    z-index: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0 0 4px;
    font-size: 26px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: var(--text);
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    font-size: 14px;
    font-weight: 600;
  }

  /* Theme goes last so its colors override the base text colors above */
  ${({ $variant }) => TILE_THEMES[$variant]}
`;

export const TileImages = styled.div`
  display: flex;
  align-items: flex-end;

  img {
    width: 72px;
    height: 96px;
    object-fit: cover;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(15, 15, 26, 0.2);
    transition: transform 0.3s ease;
  }

  img + img {
    margin-left: -28px;
  }

  img:nth-child(1) {
    transform: rotate(-6deg);
  }

  img:nth-child(3) {
    transform: rotate(6deg);
  }

  ${CategoryTile}:hover & img:nth-child(1) {
    transform: rotate(-10deg) translateX(-6px);
  }

  ${CategoryTile}:hover & img:nth-child(3) {
    transform: rotate(10deg) translateX(6px);
  }
`;

// Full-width background bands; BandInner keeps the content aligned to the page container
const BAND_TONES = {
  hero: css`
    padding: 24px 0 8px;
    background:
      radial-gradient(50% 65% at 8% 0%, rgba(91, 76, 255, 0.2), transparent 70%),
      radial-gradient(40% 55% at 82% 8%, rgba(198, 255, 61, 0.38), transparent 70%),
      linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);

    /* Dot grid that fades out towards the bottom of the hero */
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(15, 15, 26, 0.09) 1px, transparent 1px);
      background-size: 22px 22px;
      -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 75%);
      mask-image: linear-gradient(180deg, #000 0%, transparent 75%);
      pointer-events: none;
    }
  `,
  plain: css`
    padding: 56px 0 0;
  `,
  sale: css`
    margin-top: 56px;
    padding: 48px 0 52px;
    background:
      repeating-linear-gradient(135deg, rgba(229, 72, 77, 0.035) 0 14px, transparent 14px 28px),
      linear-gradient(180deg, #fff3f1 0%, #fde7e5 100%);
    border-top: 1px solid #f8d4d1;
    border-bottom: 1px solid #f8d4d1;
  `,
  dark: css`
    margin-top: 56px;
    padding: 52px 0 56px;
    background:
      radial-gradient(60% 120% at 100% 0%, rgba(91, 76, 255, 0.45), transparent 60%),
      radial-gradient(40% 90% at 0% 100%, rgba(198, 255, 61, 0.12), transparent 60%),
      var(--ink);
  `,
};

export const Band = styled.section`
  position: relative;
  ${({ $tone }) => BAND_TONES[$tone] || BAND_TONES.plain}

  @media (max-width: 600px) {
    padding-top: ${({ $tone }) => ($tone === "hero" ? "12px" : "40px")};
  }
`;

export const BandInner = styled.div`
  position: relative;
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    font-size: 28px;
    color: ${({ $inverted }) => ($inverted ? "#ffffff" : "var(--ink)")};
  }

  p {
    margin: 6px 0 0;
    font-size: 14px;
    color: ${({ $inverted }) => ($inverted ? "rgba(255, 255, 255, 0.65)" : "var(--text)")};
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ $inverted }) => ($inverted ? "var(--lime)" : "var(--accent)")};
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

export const LeadCard = styled(Link)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 280px;
  padding: 28px;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(80% 90% at 100% 100%, rgba(255, 196, 120, 0.45), transparent 60%),
    linear-gradient(135deg, #ff5a5f 0%, #d62f3c 100%);
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  /* Oversized percent sign as a background accent */
  &::after {
    content: "%";
    position: absolute;
    right: -10px;
    bottom: -70px;
    font-family: var(--font-heading);
    font-size: 260px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.14);
    pointer-events: none;
  }

  strong {
    display: block;
    font-family: var(--font-heading);
    font-size: clamp(34px, 4vw, 52px);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  p {
    margin: 10px 0 0;
    max-width: 280px;
    font-size: 14px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.88);
  }

  span {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
    height: 42px;
    padding: 0 18px;
    border-radius: 12px;
    background: #ffffff;
    color: var(--danger);
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    min-height: 200px;
    padding: 22px;
  }
`;

export const TitleBadge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--danger);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const NewsletterBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 64px;
  padding: 36px 40px;
  border-radius: var(--radius-lg);
  background: var(--lime);

  h2 {
    margin: 0 0 6px;
    font-size: 28px;
  }

  p {
    margin: 0;
    color: #2b3a07;
  }

  form {
    position: relative;
    display: flex;
    gap: 10px;
    flex: 0 1 460px;
  }

  input {
    flex: 1;
    min-width: 0;
    height: 48px;
    padding: 0 16px;
    border: 1px solid transparent;
    border-radius: 12px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: var(--ink);
    }
  }

  form > span {
    position: absolute;
    top: calc(100% + 6px);
    left: 4px;
    font-size: 13px;
    font-weight: 600;
    color: #9b1c1f;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
    padding: 28px 22px 36px;

    h2 {
      font-size: 23px;
    }

    form {
      flex-basis: auto;
    }
  }

  @media (max-width: 420px) {
    form {
      flex-direction: column;
    }
  }
`;

export const SeoTextContainer = styled.section`
  margin-top: 48px;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);

  h2 {
    margin: 0 0 12px;
    font-size: 22px;
  }

  p,
  li {
    font-size: 15px;
    line-height: 1.65;
    color: var(--text);
  }

  p {
    margin: 0 0 16px;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding-left: 20px;
  }

  strong {
    color: var(--ink);
  }

  @media (max-width: 600px) {
    padding: 22px 20px;

    p,
    li {
      font-size: 14px;
    }
  }
`;
