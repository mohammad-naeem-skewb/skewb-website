import { Container, Typography, Grid, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CarouselService({ img, content, heading }) {
  return (
    <Box sx={{ color: "white", position: "relative" }}>
      <Box
        sx={{
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
          padding: "5%",
        }}
      >
        <Box sx={{ width: "100%", padding: "5%" }}>
          <img src={img} width={"100%"} height={"100%"} />
        </Box>
        <Box sx={{ marginTop: "5%", width: "100%", padding: "3%" }}>
          <Typography variant="h4">{heading}</Typography>
          <Typography
            sx={{
              marginTop: "5%",
              textAlign: "left",
              fontSize: "20px",
              lineHeight: "176%",
              color: "#616d7e",
            }}
          >
            {content}
          </Typography>
          <Button
            size="small"
            style={{
              color: "#d6ff41",
              borderRadius: "15px",
              padding: "16px 35px",
              fontSize: "18px",
              lineHeight: "140%",
              
            }}
          >
            <Link
              to="/serviceExplore"
              style={{ textDecoration: "none", color: "#d6ff41" }}
            >
              {" "}
              Explore{" "}
            </Link>
          </Button>
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
}

export default CarouselService;
