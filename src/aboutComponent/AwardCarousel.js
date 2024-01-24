import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../homeComponents/Testimonials.css";
import G20 from "../assets/awardslogo/G20.png";
import Hartron from "../assets/awardslogo/HARTRON.png";
import StartupAward from "../assets/awardslogo/startup_award_tajlogo.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import AwardCard from "./AwardCard";

export default function AwardCarousel() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const awardsArr = [
    { AwardName: "G20 Summit", img: G20 },
    { AwardName: "Hartron", img: Hartron },
    { AwardName: "Startup Award", img: StartupAward },
  ];

  return (
    <Box sx={{ padding: "3%", width:isMedium||isSmall?"40%":"20%" , margin: "auto" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        effect="fade" // Use 'fade' for smoother transitions
        speed={800} // Set the transition speed in milliseconds
        direction="horizontal" // Set the direction to 'horizontal'
        loop={true} // Enable loop to make it continuous} // Initialize navigation
      >
        {awardsArr.length > 0 &&
          awardsArr.map((ele, index) => {
            return (
              <SwiperSlide key={index}>
                <AwardCard img={ele.img} name={ele.AwardName} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
}
