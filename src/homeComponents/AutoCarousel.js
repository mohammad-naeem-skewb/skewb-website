import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import "./Testimonials.css";
import Carousel from "./Carousel";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";
 
export default function AutoCarousel({ contentArrHomeCards }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
 
  // console.log(contentArr);
 
  // const contentArray = [
  //   {
  //     image: img1,
  //     content:
  //       "Go beyond basic insights with our AI-powered analytics tool that helps you build a sophisticated database & leverage it with effective planning & stunning accuracy",
  //     heading: "Transformational leap in marketing analytics",
  //   },
  //   {
  //     image: img2,
  //     content:
  //       "We take digital marketing analytics one step further with unparalleled prescriptive deep-dive. Our innovative end-to-end analytics solution gives you relevant data & helps in strategy formulation & planning at the lowest cuts",
  //     heading: "Reinvent digital analytics, with Skewb",
  //   },
  // ];
 
  const swiperRef = useRef(null);
 
  const handleCardMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };
 
  const handleCardMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };
 
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: isMedium || isSmall ? false : true,
        }}
        navigation={isMedium || isSmall ? false : true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        effect="fade"
        speed={800}
        direction="horizontal"
        loop={true}
        simulateTouch={true}
        touchRatio={2}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {contentArrHomeCards?.length > 0 && contentArrHomeCards.map((ele, index) => (
          <SwiperSlide key={index}>
            <Carousel
              img={ele.image}
              content={ele.content}
              heading={ele.title}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}