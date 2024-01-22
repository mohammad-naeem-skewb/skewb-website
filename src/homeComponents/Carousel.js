import { Container, Typography, Grid, Box } from "@mui/material";
import React, { useState } from "react";

function Carousel({ img, content, heading }) {
  return (
    <Box sx={{ color: "white", position: "relative"}}>
      <Box
        sx={{
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
         
        }}
      >
        <Box sx={{ width: "90%", padding: "5%", marginTop:"1%" }}>
          <img alt="" src={img} width={"100%"} height={"100%"} />
        </Box>
        <Box sx={{ width: "100%", padding: "3%" }}>
          <Typography variant="h3" sx={{textAlign:"left"}}>{heading}</Typography>
          <Typography
            sx={{
            
              textAlign: "left",
              fontSize: "18px",
              lineHeight: "176%",
              color: "#616d7e",
            }}
          >
            {" "}
            {content}{" "}
          </Typography>
        </Box>

        <Box></Box>
        {/* <ArrowForwardIosIcon onClick={nextSlide} /> */}
      </Box>
    </Box>
  );
}

export default Carousel;
