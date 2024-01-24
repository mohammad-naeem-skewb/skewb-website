import React from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";

const DynamicContent = ({
  title,
  image1,
  subtitle1,
  subtitle2,
  heading1,
  para1,
  para2,
  para3
}) => {
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
        // border: "2px solid red",
        paddingTop: "1%",
      }}
    >
      {/* {this is heading1 } */}
      <Typography variant="h2" gutterBottom>
        {title}
        {/* {this is image} */}
      </Typography>
      <img src={image1} alt="Dynamic_Photo" style={{ width: "35%" }} />
      {/* {this is contebnt1 and content2  } */}
      <Box
        sx={{
          padding: isMatch || isMatchSmall ? "0 5% 0 5%" : "0 14% 0 14%",
          marginTop: "1%",
          marginBottom: isMatch || isMatchSmall ? "4%" : 0,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "white",
            // border: "2px solid blue",
            fontFamily: "Inter",
            textAlign: "left",
            padding: "1%",
            borderLeft: "5px solid green",
          }}
        >
          {subtitle1}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        style={{
          fontSize: "18px",
          color: "#8c99ab",
          padding: isMatch || isMatchSmall ? "0 5% 0 5%" : "0 15% 0 15%",
          textAlign: "left",
          fontFamily: "Inter",
        }}
      >
        {subtitle2}
      </Typography>

      {/* {this is heading } */}

      <Box
        sx={{
          padding: isMatch || isMatchSmall ? "0 5% 0 5%" : "0 15% 0 15%",
          marginTop: "2%",
          marginBottom: isMatch || isMatchSmall ? "4%" : 0,
        }}
      >
        <Typography
          variant="h3"
          style={{
            fontSize: "25px",
            color: "#d6ff41",

            textAlign: "left",
            fontFamily: "Inter",
          }}
        >
          {heading1}
        </Typography>
      </Box>
      {/* {this is content3 } */}
      <Box
        sx={{
          padding: isMatch || isMatchSmall ? "0 5% 0 5%" : "0 15% 0 15%",
          marginTop: "2%",
          marginBottom: isMatch || isMatchSmall ? "4%" : 0,
        }}
      >
        <Typography
          variant="body1"
          style={{
            fontSize: "18px",
            color: "#8c99ab",
            textAlign: "left",
            fontFamily: "Inter",
            marginTop:"5%"
          }}
        >
          {para1}
        </Typography>

        <Typography
          variant="body1"
          style={{
            fontSize: "18px",
            color: "#8c99ab",
            textAlign: "left",
            fontFamily: "Inter",
            marginTop:"5%"
          }}
        >
          {para2}
        </Typography>

        <Typography
          variant="body1"
          style={{
            fontSize: "18px",
            color: "#8c99ab",
            textAlign: "left",
            fontFamily: "Inter",
            marginTop:"5%"
          }}
        >
          {para3}
        </Typography>
      </Box>
    </Paper>
  );
};

export default DynamicContent;
