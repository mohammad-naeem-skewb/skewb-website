import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const DynamicContent = ({
  heading,
  photoUrl,
  content1,
  content2,
  heading2,
  content3,
}) => (
  <Paper
    elevation={3}
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "5%",
      marginTop: "7%",
      marginLeft: "5%",
      marginRight: "5%",
      textAlign: "center",
    }}
  >
    {/* {this is heading1 } */}
    <Typography variant="h1" gutterBottom>
      {heading}
      {/* {this is image} */}
    </Typography>
    <img
      src={photoUrl}
      alt="Dynamic Photo"
      style={{ maxWidth: "85%", marginBottom: "5%", marginTop: "10%" }}
    />
    {/* {this is contebnt1 and content2  } */}
    <Typography
      variant="body1"
      style={{
        borderLeft: "5px solid green",
        padding: "2%",
        fontSize: "18px",
        color: "white",
        paddingLeft: "5%",
        marginLeft: "10%",
        marginRight: " 10%",
        paddingRight: "2%",
        textAlign: "left",
        fontFamily: "Inter",
      }}
    >
      {content1}
    </Typography>
    <Typography
      variant="body1"
      style={{
        padding: "2%",
        fontSize: "18px",
        color: "#8c99ab",
        paddingLeft: "5%",
        marginLeft: "10%",
        marginRight: " 10%",
        paddingRight: "2%",
        textAlign: "left",
        fontFamily: "Inter",
      }}
    >
      {content2}
    </Typography>

    {/* {this is heading } */}

    <Typography
      variant="h3"
      style={{
        fontSize: "25px",
        color: "#d6ff41",
        padding: "2%",
        paddingLeft: "5%",
        marginLeft: "10%",
        marginRight: " 10%",
        paddingRight: "2%",
        textAlign: "left",
        fontFamily: "Inter",
      }}
    >
      {heading2}
    </Typography>
    {/* {this is content3 } */}
    <Typography
      variant="body1"
      style={{
        padding: "2%",
        fontSize: "18px",
        color: "#8c99ab",
        paddingLeft: "5%",
        marginLeft: "10%",
        marginRight: " 10%",
        paddingRight: "2%",
        textAlign: "left",
        fontFamily: "Inter",
      }}
    >
      {content3}
    </Typography>
  </Paper>
);

export default DynamicContent;
