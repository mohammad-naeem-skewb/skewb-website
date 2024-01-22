import { Typography, Box } from "@mui/material";
import industry from "../constants/Indusry";
import React from "react";

export default function  Indtext() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          {industry.headtext1}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "3%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
           
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "176%",
            color: "#8c99ab",
          }}
        >
          {industry.headtext2}
        </Typography>
      </Box>
    </>
  );
}
