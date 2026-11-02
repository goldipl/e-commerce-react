import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CATEGORIES, getProductById, isOnSale, productPath } from "../../../data/catalog";
import { formatPrice, getDiscountPercent } from "../../../utils/format";
import { SwiperHeroContainer, Slide, SlideText, SlideImage } from "./SwiperHeroStyles";

// Slides are built from catalog data, so prices and discounts always match the shop
const SLIDES = [
  {
    productId: 204,
    eyebrow: "Hit na PS5",
    title: "Marvel's Spider-Man 2",
    text: "Peter Parker i Miles Morales w największej przygodzie w Nowym Jorku.",
    cta: "Kup teraz",
    background: "linear-gradient(120deg, #2a0a12 0%, #8f1525 100%)",
  },
  {
    productId: 201,
    eyebrow: "Promocja",
    title: "Horizon Forbidden West",
    text: "Wyrusz z Aloy na Zakazany Zachód — teraz w niższej cenie.",
    cta: "Sprawdź ofertę",
    background: "linear-gradient(120deg, #06303a 0%, #0f7c8a 100%)",
  },
  {
    productId: 102,
    eyebrow: "Książki",
    title: "Naucz się programować",
    text: "JavaScript, Java, Python i C++ — sprawdzone podręczniki dla początkujących i zaawansowanych.",
    cta: "Zobacz książki",
    to: CATEGORIES.books.path,
    background: "linear-gradient(120deg, #1b1846 0%, #5b4cff 100%)",
  },
  {
    productId: 305,
    eyebrow: "T-shirty Classic",
    title: "10 kolorów, rozmiary S–XXL",
    text: "Miękka, przewiewna bawełna na co dzień. Znajdź swój kolor.",
    cta: "Wybierz kolor",
    to: CATEGORIES.tshirts.path,
    background: "linear-gradient(120deg, #0f0f1a 0%, #2c3a12 100%)",
    // Product photo has a white background, so it is shown as a rounded card
    imageCard: true,
  },
];

const SwiperHero = () => {
  return (
    <SwiperHeroContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        a11y={{ enabled: true, prevSlideMessage: "Poprzedni slajd", nextSlideMessage: "Następny slajd" }}
      >
        {SLIDES.map((slide) => {
          const product = getProductById(slide.productId);
          const discount = getDiscountPercent(product);
          return (
            <SwiperSlide key={slide.productId}>
              <Slide style={{ background: slide.background }}>
                <SlideText>
                  <span>{discount > 0 ? `${slide.eyebrow} −${discount}%` : slide.eyebrow}</span>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  {!slide.to && (
                    <strong>
                      {formatPrice(product.price)}
                      {isOnSale(product) && <s>{formatPrice(product.oldPrice)}</s>}
                    </strong>
                  )}
                  <Link to={slide.to || productPath(product.id)}>{slide.cta}</Link>
                </SlideText>
                <SlideImage $card={slide.imageCard}>
                  <img src={product.itemImage} alt={product.itemName} width="300" height="400" />
                </SlideImage>
              </Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperHeroContainer>
  );
};

export default SwiperHero;
