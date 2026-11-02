import styled from "styled-components";

export const SwiperHeroContainer = styled.div`
  .swiper {
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  /* Stretch every slide to the tallest one, so slides with less text
     (e.g. no price) still fill the whole carousel with their background */
  .swiper-slide {
    display: flex;
    height: auto;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.92);
    color: var(--ink);
    box-shadow: 0 4px 16px rgba(15, 15, 26, 0.18);
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &::after {
      font-size: 15px;
      font-weight: 700;
    }

    &:hover {
      background-color: var(--accent);
      color: #ffffff;
    }
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #ffffff;
    opacity: 0.5;
    transition:
      opacity 0.2s ease,
      width 0.2s ease;
  }

  .swiper-pagination-bullet-active {
    width: 22px;
    border-radius: 4px;
    background: var(--lime);
    opacity: 1;
  }

  @media (max-width: 700px) {
    .swiper {
      border-radius: var(--radius);
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

export const Slide = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  align-items: center;
  gap: 32px;
  min-height: 400px;
  padding: 48px 88px;
  color: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 72px;
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr) 120px;
    gap: 16px;
    min-height: 300px;
    padding: 28px 22px 44px;
  }
`;

export const SlideText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  span {
    padding: 5px 12px;
    border-radius: 999px;
    background: var(--lime);
    color: var(--ink);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: clamp(26px, 4vw, 46px);
    line-height: 1.1;
  }

  p {
    margin: 0;
    max-width: 440px;
    font-size: 16px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.8);
  }

  strong {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 26px;

    s {
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    height: 48px;
    padding: 0 26px;
    border-radius: 12px;
    background: #ffffff;
    color: var(--ink);
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.15s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 700px) {
    gap: 10px;

    p {
      font-size: 13px;
    }

    strong {
      font-size: 20px;
    }

    a {
      height: 40px;
      padding: 0 18px;
      font-size: 14px;
    }
  }
`;

export const SlideImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 260px;
    height: auto;
    aspect-ratio: ${({ $card }) => ($card ? "1 / 1" : "3 / 4")};
    object-fit: contain;
    border-radius: ${({ $card }) => ($card ? "var(--radius-lg)" : "0")};
    filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.45));
    transform: rotate(-3deg);
  }
`;
