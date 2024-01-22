import React from "react";
import { Typography, Button, TextField, Box, Grid } from "@mui/material";
import subscribe from "../constants/subscribe";
export default function Subscribe() {
  return (
    <>
      <Grid
        sx={{
          backgroundImage:
            "radial-gradient(circle farthest-side at 50% -170%, rgba(0, 0, 0, 0), #000), linear-gradient(#d6ff41, rgba(0, 0, 0, 0))",
 
         
       
          boxShadow: "#C8D640",
          borderRadius: "15px",
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          height:'100%',
          position:'relative',
          overflow:'hidden',
          flexDirection:'column',
          marginTop:"20px"
 
        }}
      >
        <Typography
          variant="h2"
          component="p"
          sx={{
            color: "white",
           justifyContent:'center',
            textAlign: "center",
           padding:'1%',
           
            fontSize:'18px',
            lineHeight:'180%',
            fontFamily:'inter,sans-serif',
            flexDirection:'column',
            zIndex:'10'
          }}
        >
          {subscribe.text}
        </Typography>
 
        <Grid
          container
          sx={{
            display: "flex",
           
            justifyContent: "center",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Your email address"
           
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white", // Set the text color to white
               
                },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Remove the default border
              },
              border: "none",
              borderRadius: "10px",
              width: "350px",
              background: "rgba(29, 40, 56, .25)",
 
              marginBottom: "5%",
             
            }}
          />
 
          <Button
            type="subscribe"
            variant="contained"
            sx={{
              border: "1px solid #C8D640",
              fontWeight: "bold",
              borderRadius: "8px",
              marginBottom: "5%",
 
              boxShadow: "#C8D640",
              width: "150px",
              // box-sizing: border-box;
              color: "black",
 
              backgroundColor: "#C8D640",
              marginLeft: "3%",
              ":hover": {
                color: "#C8D640",
                background: "black",
                transform: "scale(1.15) rotate(0 deg)",
              },
            }}
          >
            {" "}
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </>
  );
}