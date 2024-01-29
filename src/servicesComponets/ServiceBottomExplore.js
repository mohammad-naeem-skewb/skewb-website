import React from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";

const ServiceBottomExplore = ({ heading, content }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: isMatch||isMatchSmall?"5%":"0 18% 0 18%",
      }}
    >
      {/* {this is heading } */}
      <Typography
        variant="body1"
        style={{
          fontSize: "24px",
          color: "#FFFFFF",
          textAlign: "left",
          fontFamily: "Inter",
        }}
      >
        Democratizing Analytics
      </Typography>
      {/* {this is content } */}
      <Typography
        variant="body1"
        style={{
          fontSize: "18px",
          color: "#8c99ab",
          textAlign: "left",
          fontFamily: "Inter",
        }}
      >
        We believe in single source of truth, and our SaaS reflects that. Our
        highly advanced AI solutions use the same model constructs to provide:
        <li> Strategic insights for the decision-makers</li>
        <li>Tactical inputs for the last mile deployment and planning </li>
      </Typography>
    </Paper>
  );
};

export default ServiceBottomExplore;
