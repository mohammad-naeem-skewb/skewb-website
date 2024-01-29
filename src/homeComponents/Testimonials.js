import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";
import wavemaker from "../assets/wavemaker.png";
import delhivery from "../assets/Delhivery_logo.png";
import cloudNine from "../assets/cloudNine.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import Cards from "./Cards";
export default function Testimonials() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const testimonialArr = [
    {
      image: delhivery,
      content:
        "We have seen remarkable benefits using Skewb solution, not only in the time-saving aspects of quick turnaround analytics, but also in the level of insight one can get from the media and marketing data. Skewb prescriptive analytics suite and simulation tool, has helped us take informed decisions for our growth strategy. Measuring the impact of strategies executed has been to the point. A big shoutout to Skewb for theirservice- Delhivery",
    },
    {
      image: wavemaker,
      content:
        "I would strongly recommend working with Skewb Analytics. The team is wonderful to work with and they care about making intelligent, informed decisions, based on robust mathematical modeling solutions.”- Amir Suherlan Managing Director, Wavemaker Indonesia",
    },
    {
      image: cloudNine,
      content:
        "Our interaction with Skewb analytics was a fruitful one. Skewb's agile measurement platform provided precise and accurate insights and predictions on our digital ROAS. Team's understanding about the advanced marketing analytics space and ability to replicate the same for the healthcare domain is commendable and helped us achieve our goal. We would highly rely on Skewb to help us solve complex marketing problems for Cloudnine.-Cloudnine",
    },
  ];

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
        variant="h4"
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
        effect="fade" // Use 'fade' for smoother transitions
        speed={800} // Set the transition speed in milliseconds
        direction="horizontal" // Set the direction to 'horizontal'
        loop={true} // Enable loop to make it continuous} // Initialize navigation
        simulateTouch={true}
        touchRatio={2}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {testimonialArr.length > 0 &&
          testimonialArr.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMedium || isSmall ? "100%" : "80%",
                  height: "40%",
                  color: "#B4D0B4",
                  marginTop: "5%",
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <Cards image={item.image} content={item.content} />
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
