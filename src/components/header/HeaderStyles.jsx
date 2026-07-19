import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(247, 246, 242, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid #e4e2dc;
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 88vw;
  max-width: 1240px;
  height: 72px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 92vw;
    height: auto;
    flex-wrap: wrap;
    padding: 10px 0;
    gap: 10px;
  }
`;

export const LogoContainer = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    display: block;
    transition: transform 0.25s ease;
  }

  a:hover img {
    transform: scale(1.04);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #0f0f1a;
  img {
    height: auto;
  }
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const CounterItems = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #0f0f1a;
  background: #c6ff3d;
  border-radius: 999px;
  border: 2px solid #f7f6f2;
  line-height: 1;

  &:empty {
    display: none;
  }
`;

export const CartButtonContainer = styled.div`
  position: relative;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    transition:
      background 0.2s ease,
      transform 0.15s ease;

    svg {
      font-size: 19px;
      color: #0f0f1a;
    }

    &:hover {
      background: #ffffff;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
