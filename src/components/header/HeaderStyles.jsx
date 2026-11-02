import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(247, 246, 242, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);

  /* On phones the full header would take too much of the screen, so it scrolls away */
  @media (max-width: 800px) {
    position: relative;
  }
`;

export const AnnouncementBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 7px 16px;
  background: var(--ink);
  color: #f7f6f2;
  font-size: 12.5px;

  strong {
    color: var(--lime);
    letter-spacing: 0.03em;
  }

  @media (max-width: 800px) {
    span:not(:nth-child(2)) {
      display: none;
    }
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: min(var(--container), calc(100% - 32px));
  height: 72px;
  margin: 0 auto;

  @media (max-width: 800px) {
    height: auto;
    flex-wrap: wrap;
    padding: 10px 0;
    gap: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    transition: transform 0.25s ease;
  }

  a:hover svg {
    transform: rotate(-6deg) scale(1.05);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

export const HeaderIconLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  min-width: 44px;
  padding: ${({ $wide }) => ($wide ? "0 14px 0 12px" : "0")};
  border-radius: 999px;
  color: var(--ink);
  text-decoration: none;
  transition: background 0.2s ease;

  svg {
    font-size: 21px;
  }

  &:hover {
    background: var(--surface);
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const CartTotal = styled.span`
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CounterItems = styled.span`
  position: absolute;
  top: 2px;
  left: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 700;
  color: var(--ink);
  background: var(--lime);
  border-radius: 999px;
  border: 2px solid var(--bg);
  line-height: 1;

  &:empty {
    display: none;
  }

  @media (max-width: 600px) {
    left: auto;
    right: -2px;
  }
`;
