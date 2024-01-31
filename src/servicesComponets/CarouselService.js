import {
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CarouselService({
  img,
  content,
  heading,
  onMouseEnter,
  onMouseLeave,
}) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const title = heading.replace(/ /g, "_");
  console.log(title);
  return (
    <Box
      sx={{
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        marginTop: "0px",
        padding: "5%",
        flexDirection: isMedium || isSmall ? "column" : "row",
      }}
    >
      <Box sx={{ width: "100%", padding: "5%" }}>
        <img src={img} width={"100%"} height={"100%"} alt={heading} />
      </Box>
      <Box
        sx={{
          marginTop: "5%",
          width: "100%",
          padding: "3%",
          textAlign: isMedium || isSmall ? "center" : "left",
          ":hover": {
            cursor: "pointer",
            background:
              "radial-gradient(66.07% 100% at 50% -45.72%, rgba(220, 255, 91, 0.7) 0%, rgba(28, 36, 39, 0) 100%)",
          },
        }}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        <Typography variant="h4">{heading}</Typography>
        <Typography
          sx={{
            marginTop: "5%",
            fontSize: "20px",
            lineHeight: "176%",
            color: "#616d7e",
            marginBottom: "4%",
            textAlign: isMedium || isSmall ? "center" : "left",
          }}
        >
          {content}
        </Typography>
        <Button
          size="medium"
          sx={{
            color: "#d6ff41",
            borderRadius: "18px",
            width: isMedium || isMedium ? "30%" : "20%",
            lineHeight: "140%",
            border: "1px solid grey",
            padding: "0.5 1rem",
          }}
        >
          <Link
            //  to={`/industryExplore/${title}`}
            to={`/serviceExplore/${title}`}
            target="_blank"
            style={{ textDecoration: "none", color: "#d6ff41" }}
          >
            {" "}
            Explore{" "}
          </Link>
        </Button>
      </Box>

      <Box></Box>
    </Box>
  );
}

export default CarouselService;
