import React from "react";
import contactUs from "../constants/contactUs";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
 
export default function Lowertext() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        width: isMatch ? "100%" : "50%",
        padding: "4%",
        paddingTop: "2%",
      }}
    >
      {" "}
      <Typography variant="h3">{contactUs.text3}</Typography>
      <Typography variant="h5" component="p" sx={{ color: "gray" }}>
        {contactUs.text4}
      </Typography>
    </Box>
  );
}