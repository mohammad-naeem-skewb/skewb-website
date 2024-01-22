import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ServiceBottomExplore = ({ heading, content }) => (
  <Paper
    elevation={3}
    style={{
      backgroundColor: "black",
      color: "white",
      paddingLeft: '5%', 
      paddingRight:'5%',
   
      marginLeft: "5%",
      marginRight: "5%",
      textAlign: "center",
    }}
  >
    {/* {this is heading } */}
    <Typography
      variant="body1"
      style={{
        padding: "2%",
        fontSize: "24px",
        color: "#FFFFFF",
        paddingLeft: "5%",
        marginLeft: "10%",
        marginRight: " 10%",
        paddingRight: "2%",
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
      We believe in single source of truth, and our SaaS reflects that. Our
      highly advanced AI solutions use the same model constructs to provide:
      <li> Strategic insights for the decision-makers</li>
      <li>Tactical inputs for the last mile deployment and planning </li>
    </Typography>
  </Paper>
);

export default ServiceBottomExplore;
