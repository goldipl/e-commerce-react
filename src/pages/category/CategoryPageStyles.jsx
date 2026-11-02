import styled from "styled-components";

export const ListingHeader = styled.div`
  margin-bottom: 28px;
  padding: 28px 32px;
  border-radius: var(--radius-lg);
  background: ${({ $accent }) => ($accent ? "var(--danger)" : "var(--ink)")};
  color: #ffffff;

  h1 {
    margin: 0 0 8px;
    font-size: 34px;
  }

  p {
    margin: 0;
    max-width: 640px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.82);
  }

  @media (max-width: 600px) {
    padding: 20px;
    border-radius: var(--radius);

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
    }
  }
`;
