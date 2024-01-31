import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../homeComponents/Testimonials.css";
// import G20 from "../assets/awardslogo/G20.png";
// import Hartron from "../assets/awardslogo/HARTRON.png";
// import StartupAward from "../assets/awardslogo/startup_award_tajlogo.png";

// import required modules
import  { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import AwardCard from "./AwardCard";



export default function AwardCarousel() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  // const awardsArr = [
  //   { AwardName: "G20 Summit", img: G20 },
  //   { AwardName: "Hartron", img: Hartron },
  //   { AwardName: "Startup Award", img: StartupAward },
  // ];

  const [award, setAward] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    async function getAwardData() {
      const response = await fetch("http://15.207.123.147:8000/api/award/");
      const responseJson = await response.json();
      setAward(responseJson);
    }
    getAwardData();
  }, []);
  // console.log(award);
  return (
    <Box
      sx={{
        padding: "3%",
        width: isMedium || isSmall ? "40%" : "20%",
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
      
        
    
        {award.map((ele, index) => {
          return (
            <SwiperSlide key={index}>
              <AwardCard img={ele.award_image} name={ele.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
