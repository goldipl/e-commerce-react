import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow);
    transform: translateY(-3px);
  }

  img {
    opacity: ${({ $unavailable }) => ($unavailable ? 0.55 : 1)};
  }
`;

export const ImageContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3 / 4;
  padding: 16px;
  background: var(--surface-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.35s ease;
  }

  ${ItemContainer}:hover & img {
    transform: scale(1.04);
  }
`;

export const BadgesOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 52px;
  pointer-events: none;
`;

export const WishlistBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: ${({ $active }) => ($active ? "var(--danger)" : "var(--ink)")};
  font-size: 18px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 3px solid rgba(91, 76, 255, 0.35);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  padding: 14px 14px 0;
`;

export const MetaLine = styled.span`
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NameLink = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6em;
  margin: 0;
  font-family: var(--font-heading);
  font-size: 15px;
  line-height: 1.3;
  color: var(--ink);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`;

export const PriceRow = styled.div`
  margin-top: auto;
  padding-top: 4px;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px 14px;
`;

export const InCartNote = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-align: center;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`;
