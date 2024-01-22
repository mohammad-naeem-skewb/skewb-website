import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/skewb_logo.gif";
import ReactTyped from "react-typed";
import AnimatedText from "./AnimatedText";

function HeroSection() {
  return (
    <Grid container >
      {/* first item for welcome content */}
      <Grid
        item
        md={6}
        sx={12}
        display="flex"
        textAlign="center"
       
        justifyContent={"center"}
        style={{
          marginTop:"10%",
         
         
        }}
      >
        <Typography sx={{ color: "white" }}  component="div">
          <AnimatedText />
          <Typography
            component="div"
            sx={{
              marginTop: "30px",
              textAlign: "center",
              fontSize: "20px",
              lineHeight: "176%",
              color: "#8c99ab",
              
            }}
          >
            Assisting organizations, attain marketing excellence, with our
            advanced analytics and ultra-intelligent AI models
          </Typography>
          <Box>
            {/* Use Link for navigation */}

            <Link to="/service" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  // marginTop: "30px",
                  backgroundColor: "#d6ff41",
                  color: "black",
                  fontSize: "18px",
                  borderRadius: "15px",
                  lineHeight: "140%",
                  textAlign: "center",
                  marginTop:"5%",
                  "&:hover": {
                    backgroundColor: "#d6ff41",
                  },
                }}
              >
                Watch Demo
              </Button>
            </Link>
          </Box>
        </Typography>
      </Grid>

      {/* second item for image */}
      <Grid item md={6} sx={12}>
        <img src={Logo}  width={"100%"} alt="Skewb Logo" />
      </Grid>
    </Grid>
  );
}

export default HeroSection;
