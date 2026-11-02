import styled from "styled-components";

export const HelpLayout = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const HelpNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    margin: 0 0 8px;
    font-size: 20px;
  }

  a {
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;

    &:hover {
      background: var(--surface);
      color: var(--ink);
    }

    &.active {
      background: var(--ink);
      color: #ffffff;
    }
  }

  @media (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;

    h2 {
      display: none;
    }
  }
`;

export const HelpContent = styled.article`
  max-width: 720px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);

  h1 {
    margin: 0 0 16px;
    font-size: 28px;
    color: var(--ink);
  }

  h2 {
    margin: 28px 0 10px;
    font-size: 19px;
    color: var(--ink);
  }

  p {
    margin: 0 0 14px;
  }

  ol {
    margin: 0 0 14px;
    padding-left: 20px;
  }

  table {
    width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    font-size: 14px;
  }

  th,
  td {
    padding: 10px 8px 10px 0;
    border-bottom: 1px solid var(--border);
    text-align: left;
    vertical-align: top;
  }

  th {
    color: var(--ink);
    font-weight: 600;
  }

  td:nth-child(3) {
    text-align: right;
    white-space: nowrap;
  }
`;
