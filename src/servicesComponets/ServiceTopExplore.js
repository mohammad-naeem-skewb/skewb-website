import React from "react";
import { Typography, Paper, useTheme, useMediaQuery } from "@mui/material";

const Top = ({ image, title, data }) => {
  console.log("data: ", data);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: "white",
        padding: "5%",
        marginTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        textAlign: "center",
        position: "relative", // Set position to relative
        background: `url('${image}') center/cover`, // Use the provided image prop
        backgroundSize: isMatch || isMatchSmall ? "100%" : "75%",
        height: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading 1 */}
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
    </Paper>
  );
};

export default Top;
