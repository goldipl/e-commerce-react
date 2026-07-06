import styled from "styled-components";

export const SeoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px auto 0;
  max-width: 1100px;
  padding: 32px;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e4e2dc;

  p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    color: #4a4a56;
    margin: 0 0 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ol {
    margin: 0 0 16px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-family: "Inter", sans-serif;
      font-size: 15px;
      line-height: 1.6;
      color: #4a4a56;

      strong {
        color: #0f0f1a;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 24px 20px;
    border-radius: 16px;
    margin-top: 24px;

    p {
      font-size: 14px;
    }

    ol {
      padding-left: 16px;

      li {
        font-size: 13.5px;
      }
    }
  }
`;

export const ShopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 40px auto 24px;
  width: 88vw;
  max-width: 1240px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #0f0f1a;
    letter-spacing: -0.01em;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 92vw;
    margin: 28px auto 16px;

    h1 {
      font-size: 24px;
    }
  }
`;

export const ShopProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 88vw;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    width: 92vw;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;
