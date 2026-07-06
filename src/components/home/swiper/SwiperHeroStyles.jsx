import styled from "styled-components";

export const SwiperHeroContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 0 8px;

  .swiper {
    height: auto !important;
    padding-bottom: 32px;
    max-width: 1240px;
    width: 88vw;
    margin: 0 auto;
    border: 1px solid #e4e2dc;
    padding: 24px;
    border-radius: 24px;

    .swiper-wrapper {
      a {
        display: flex;
        justify-content: center;
        user-select: none;
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          user-select: none;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(15, 15, 26, 0.06);
          transition:
            transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.35s ease;

          img {
            height: auto;
            width: 100%;
            display: block;
          }

          &:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 12px 32px rgba(15, 15, 26, 0.14);
          }
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #0f0f1a;
      background-color: #f7f6f2;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      box-shadow: 0 4px 16px rgba(15, 15, 26, 0.1);
      transition:
        background-color 0.2s ease,
        color 0.2s ease;

      &::after {
        font-size: 16px;
        font-weight: 700;
      }

      &:hover {
        background-color: #5b4cff;
        color: #ffffff;
      }
    }

    .swiper-pagination {
      bottom: 8px;

      .swiper-pagination-bullet {
        background: #0f0f1a;
        opacity: 0.25;
        width: 7px;
        height: 7px;
        transition:
          opacity 0.2s ease,
          background 0.2s ease,
          width 0.2s ease;
      }

      .swiper-pagination-bullet-active {
        background: #5b4cff;
        opacity: 1;
        width: 22px;
        border-radius: 4px;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 12px 0 0;

    .swiper {
      width: 92vw;

      .swiper-wrapper {
        .swiper-slide {
          border-radius: 16px;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        width: 36px;
        height: 36px;

        &::after {
          font-size: 13px;
        }
      }
    }
  }
`;
