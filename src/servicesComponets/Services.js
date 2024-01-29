import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import img1 from "../assets/serviceAssets/tar.gif";
import img2 from "../assets/serviceAssets/cloud.gif";
import img3 from "../assets/serviceAssets/artificial.gif";
import Footer from "../pages/Footer";

import ma from "../assets/serviceAssets/m_a.png";
import da from "../assets/serviceAssets/d_a_.png";
import wa from "../assets/serviceAssets/w_a.png";
import ca from "../assets/serviceAssets/c_a.png";
import dg from "../assets/serviceAssets/dg.png";
import GrowthDriversCard from "./GrowthDriversCard";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselService from "./CarouselService";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Button, CardActions } from "@mui/material";

export default function Services() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const serviceArr = [
    {
      image: ma,
      heading: "Marketing Analytics",
      content:
        "Our Marketing Analytics solution is designed to solve the age-old problem of measuring marketing effectiveness. Our highly-evolved Marketing Analytics Solutions can help you get a higher return on your investment, aid in campaign planning and portfolio management, and much more!",
    },
    {
      image: da,
      heading: "Digital Analytics",
      content:
        "Skewb’s artificial intelligence and machine learning-powered Digital Analytics Solutions empower your team by democratizing data across your entire marketing ecosystem.We take digital marketing analytics one step further with unparalleled prescriptive deep-dive.",
    },
    {
      image: wa,
      heading: "Web Analytics",
      content:
        "Web analytics is the process of collecting and analyzing web data to understand and optimize web usage. It makes effectiveness measurement and performance tracking more relevant than ever.",
    },
    {
      image: ca,
      heading: "CRM Analytics",
      content:
        "CRM Analytics is crucial to know your customers, personalize your marketing efforts, forecast future demand, and optimize omnichannel contact with relevant target audiences. Our advanced CRM analytics have been designed and developed to give you relevant insights for the best optimization.",
    },
    {
      image: dg,
      heading: "Data Audit and Governance",
      content:
        "At Skewb, we believe it’s crucial to have an advanced level of data governance that identifies data elements and establish quality standards that ensure data collection, and sanity required for analytics and measurement.",
    },
  ];

  // const [servicesData, setServicesData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       "http://15.207.123.147:8000/explore/services/"
  //     );
  //     const responsJson = await response.json();
  //     setServicesData(responsJson);
  //   }
  //   getData();
  // }, []);
  
  const gifArr = [
    {
      heading1: "Ensemble Model",
      img: img3,
      heading2: "Millions Of Intractions",
    },
    {
      heading1: "Cloud Infra",
      img: img2,
      heading2: "Scalable and Secure Tech",
    },
    {
      heading1: "Productive Power",
      img: img1,
      heading2: "90%+ Forecasting accuracy",
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
    <Box sx={{ flexGrow: 1, color: "#e6ffe6", padding: "5%" }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
            // paddingTop: "5%",

            color: "#B4D0B4",
            // border:"2px solid red"
          }}
        >
          <Typography variant="h4" gutterBottom>
            <span
              style={{
                color: "#d6ff41",
                letterSpacing: "-.5px",
                fontFamily: "Sora, sans-serif",
                fontFamily: "500",
                // marginTop: "15%",
                color: "#ffffff",
                marginBottom: "10%",
              }}
            >
              <center>How can we help ? </center>
            </span>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                color: "#8c99ab",
                fontFamily: " Inter, sans-serif",
                fontSize: "20px",
                lineHeight: "176%",
                textAlign: "center",
                marginTop: "4%",
              }}
            >
              At Skewb, we provide you with a range of customizable analytics
              services that help you track, analyze and strategize to achieve
              your desired objectives and outcomes in the best way possible
            </Typography>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
            // paddingTop: "8%",
            paddingBottom: "0.25%",
            color: "#B4D0B4",
            // border:"2px solid blue"
          }}
        >
          <img
            src={require("../assets/serviceAssets/data.gif")}
            alt="Your alternative text"
            width="100%"
            height="auto"
          />
        </Grid>

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
          loop={true}
          simulateTouch={true}
          touchRatio={2}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {serviceArr.map((ele, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{ color: "white", position: "relative", cursor: "pointer" }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <CarouselService
                  img={ele.image}
                  content={ele.content}
                  heading={ele.heading}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Grid item xs={12} md={6} style={{ paddingTop: "9%" }} id="productDemo">
          <Typography variant="h4" gutterBottom>
            <span
              style={{
                textAlign: "center",

                letterSpacing: "-.5px",
                fontFamily: "Sora, sans-serif",

                lineHeight: "120%",
                color: "#ffffff",

                marginLeft: "24%",
              }}
            >
              {" "}
              Product Demo
            </span>
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#8c99ab",
              fontFamily: " Inter, sans-serif",
              fontSize: "20px",
              lineHeight: "176%",
              textAlign: "center",
              marginTop: "4%",
            }}
          >
            Discover efficiency like never before with our revolutionary data
            solutions. Introducing a seamless blend of advanced analytics and
            real-time processing for unparalleled insights. Elevate your
            business decisions effortlessly.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "120%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "5%",
          }}
        >
          <video width="100%" height="auto" controls autoPlay muted>
            <source
              src={require("../assets/serviceAssets/Skewb_Product_Demo.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Grid>
      </Grid>
      <Typography>
        <br />
        <br />{" "}
      </Typography>
      <Box sx={{ flexGrow: 1, color: "#e6ffe6", padding: "2%" }}>
        <Box
          sx={{
            marginTop: "0%",
            paddingLeft: "10%",
            paddingRight: "10%",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="#B4D0B4">
            <span style={{ fontSize: "1.65rem" }}>
              Skewb offers{" "}
              <b>personalized and hyper effective analytical solutions</b>{" "}
              through <b>advanced AI platform</b>
            </span>
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "2px solid red"
        }}
      >
        {gifArr &&
          gifArr.map((ele) => {
            return (
              <GrowthDriversCard
                text1={ele.heading1}
                text2={ele.heading2}
                img={ele.img}
              />
            );
          })}
      </Grid>

      <Footer />
    </Box>
  );
}
