import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Pharma = ({ heading, photoUrl, content }) => (
  <Paper
    elevation={3}
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "5%",
      marginTop: "7%",
      textAlign: "center",
    }}
  >
    <Typography variant="h2" gutterBottom>
      {heading}
    </Typography>
    <img
      src={photoUrl}
      alt="Dynamic Photo"
      style={{ maxWidth: "75%", marginBottom: "10%", marginTop: "10%" }}
    />
    <Typography variant="body1">{content}</Typography>
  </Paper>
);
