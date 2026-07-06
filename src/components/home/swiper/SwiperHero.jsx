// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperHeroContainer } from "./SwiperHeroStyles";

import banner01 from "./../../../assets/img/home/hero_swiper/banner01.jpg";
import banner02 from "./../../../assets/img/home/hero_swiper/banner02.jpg";
import banner03 from "./../../../assets/img/home/hero_swiper/banner03.jpg";
import banner04 from "./../../../assets/img/home/hero_swiper/banner04.jpg";
import banner05 from "./../../../assets/img/home/hero_swiper/banner05.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    img: banner01,
    to: "/e-commerce-react/games",
    alt: "Featured PS5 games lineup",
  },
  {
    img: banner02,
    to: "/e-commerce-react/books",
    alt: "Featured book releases",
  },
  {
    img: banner03,
    to: "/e-commerce-react/games",
    alt: "New arrivals in games",
  },
  {
    img: banner04,
    to: "/e-commerce-react/games",
    alt: "Top-rated games this week",
  },
  {
    img: banner05,
    to: "/e-commerce-react/books",
    alt: "Bestselling books this week",
  },
];

const SwiperHero = () => {
  return (
    <SwiperHeroContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        a11y={{ enabled: true }}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <Link to={slide.to}>
              <img src={slide.img} alt={slide.alt} width={800} height={400} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperHeroContainer>
  );
};

export default SwiperHero;
