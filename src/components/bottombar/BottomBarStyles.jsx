import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BottomBarContainer = styled.nav`
  width: 100%;
  border-top: 1px solid var(--border);
`;

export const BottomBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: min(var(--container), calc(100% - 32px));
  height: 46px;
  margin: 0 auto;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  font-size: 14px;
  font-weight: ${({ $muted }) => ($muted ? 500 : 600)};
  color: ${({ $highlight, $muted }) =>
    $highlight ? "var(--danger)" : $muted ? "var(--text)" : "var(--ink)"};
  text-decoration: none;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
  }

  &:hover {
    color: var(--accent);
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 0;
    height: 2px;
    border-radius: 2px;
    background: var(--accent);
  }

  &.active:first-child::after {
    left: 0;
  }

  @media (max-width: 800px) {
    font-size: 13px;
    padding: 0 10px;
  }
`;

export const Spacer = styled.div`
  flex: 1;
  min-width: 16px;
`;
