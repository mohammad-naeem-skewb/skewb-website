import React from "react";
import contactUs from "../constants/contactUs";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";

export default function Lowertext() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        width: isMatch ? "100%" : "50%",
        // marginTop:"3%"
        marginTop: "0%",
      }}
    >
      {" "}
      <Typography
        variant={isMatch || isSmallMatch ? "h5" : "h3"}
        sx={{ marginTop: isMatch || isSmallMatch ? "0" : "1%" }}
      >
        {contactUs.text3}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{ color: "gray", marginTop: isMatch || isSmallMatch ? "3%" : "1%" }}
      >
        {contactUs.text4}
      </Typography>
    </Box>
  );
}
