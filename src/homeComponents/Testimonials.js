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
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Cards from "./Cards";

export default function AutoCarousel({ client }) {
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
    <Box sx={{ padding: "3%" }}>
      <Typography
        variant={isSmall&&isMedium?"h5":"h4"}
        sx={{
          color: "white",
          textAlign: "center",
          padding: "3%",
          marginBottom: "2%",
          lineHeight: "100%",
          fontFamily: "Sora, sans-serif",
          fontWeight: "500",
          fontPalette: "80px",
        }}
      >
        Hear from our Clients
      </Typography>
      <Box
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: isMedium || isSmall ? "100%" : "80%",
          height: "40%",
          color: "#B4D0B4",
          // border: "2px solid red",
          margin: "auto",
        }}
      >
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
          {client?.length > 0 &&
            client.map((item, index) => (
              <SwiperSlide key={index}>
                <Cards
                  image={item.client_logo}
                  content={item.client_information}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
}
