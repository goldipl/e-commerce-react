import styled from "styled-components";

const MOBILE = "900px";

export const ListingLayout = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 32px;
  align-items: start;

  .mobile-only {
    display: none;
  }

  @media (max-width: ${MOBILE}) {
    grid-template-columns: minmax(0, 1fr);

    .mobile-only {
      display: inline-flex;
      margin-top: 8px;
    }
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 176px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${MOBILE}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 90;
    width: min(340px, 88vw);
    padding: 20px;
    overflow-y: auto;
    background: var(--bg);
    box-shadow: var(--shadow);
    transform: translateX(${({ $open }) => ($open ? "0" : "-105%")});
    transition: transform 0.25s ease;
  }
`;

export const SidebarHeader = styled.div`
  display: none;

  h2 {
    margin: 0;
    font-size: 20px;
  }

  button {
    display: flex;
    padding: 6px;
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: ${MOBILE}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Backdrop = styled.div`
  display: none;

  @media (max-width: ${MOBILE}) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 80;
    background: rgba(15, 15, 26, 0.4);
  }
`;

export const FilterGroup = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0 0 20px;
  border: none;
  border-bottom: 1px solid var(--border);

  legend {
    padding: 0;
    margin-bottom: 10px;
    font-family: var(--font-heading);
    font-size: 15px;
    font-weight: 600;
    color: var(--ink);
  }
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  font-size: 14px;
  color: ${({ $disabled }) => ($disabled ? "var(--muted)" : "var(--ink)")};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};

  input {
    width: 17px;
    height: 17px;
    margin: 0;
    accent-color: var(--accent);
    cursor: inherit;
  }

  span {
    flex: 1;
  }

  small {
    font-size: 12px;
    color: var(--muted);
  }
`;

export const ColorSwatch = styled.span`
  && {
    flex: 0 0 auto;
  }
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(15, 15, 26, 0.18);
`;

export const PriceInputs = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }

  span {
    color: var(--muted);
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ResultCount = styled.span`
  font-size: 14px;
  color: var(--text);
`;

export const SortSelect = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  font-size: 14px;
  color: var(--text);

  select {
    height: 40px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    font-size: 14px;
    color: var(--ink);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }

    select {
      max-width: 170px;
    }
  }
`;

export const MobileFilterBtn = styled.button`
  display: none;

  @media (max-width: ${MOBILE}) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 40px;
    padding: 0 14px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({ $plain }) => ($plain ? "transparent" : "var(--border)")};
  border-radius: 999px;
  background: ${({ $plain }) => ($plain ? "transparent" : "var(--surface)")};
  color: ${({ $plain }) => ($plain ? "var(--accent)" : "var(--ink)")};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: ${({ $plain }) => ($plain ? "transparent" : "var(--ink)")};
    text-decoration: ${({ $plain }) => ($plain ? "underline" : "none")};
  }

  svg {
    font-size: 12px;
  }
`;
