import { Typography, Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

function Carousel({ img, content, heading }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ color: "white", position: "relative" }}>
      <Box
        sx={{
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
          flexDirection: isMedium || isSmall ? "column" : "row",
          ":hover": {
            cursor: "pointer",
            boxShadow: "2px 4px 0px #black",
          },
        }}
      >
        <Box sx={{ width: "90%", padding: "5%", marginTop: "1%" }}>
          <img alt="" src={img} width={"100%"} height={"100%"} />
        </Box>
        <Box sx={{ width: "100%", padding: "3%" }}>
          <Typography
            variant="h4"
            sx={{
              lineHeight: "100%",
              fontFamily: "Sora, sans-serif",
              fontWeight: "500",
              fontPalette: "80px",
              marginBottom: "4%",
              textAlign: isMedium || isSmall ? "center" : "left",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "176%",
              color: "#616d7e",
              textAlign: isMedium || isSmall ? "center" : "left",
            }}
          >
            {" "}
            {content}{" "}
          </Typography>
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
}

export default Carousel;
