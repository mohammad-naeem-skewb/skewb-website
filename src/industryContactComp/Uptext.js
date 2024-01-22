import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import contactUs from "../constants/contactUs";
 
export default function Uptext() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
 
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        width: isMatch ? "100%" : "50%",
        paddingTop: "5%",
      }}
    >
      {" "}
      <Typography variant="h2">{contactUs.text1}</Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{ color: "gray", margin: "2%", paddingBottom: "2%" }}
      >
        {contactUs.text2}
      </Typography>
    </Box>
  );
}
 