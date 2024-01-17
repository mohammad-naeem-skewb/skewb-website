import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Logo from "../assets/skewb_logo.gif";
import ReactTyped from "react-typed";
function HeroSection() {
    return (
        <Grid container sx={{ marginTop: "3%" }}>
            {/* first item for welcome content */}
            <Grid item md={6} sx={12} style={{}} display="flex" textAlign="center" alignItems="center" justifyContent={"center"}>
                <Typography sx={{ color: "white" }} component="div">
                    <Typography variant='h3' sx={{ lineHeight: "100%", fontFamily: "Sora, sans-serif", fontWeight: "500", fontPalette: "80px" }}>

                        Welcome To{" "}
                        <ReactTyped
                            strings={["Skewb Analytics", "New Age Prescriptive Analytics", "Advanced AI Modules"]}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={1000}
                            showCursor={false}  // Set showCursor to false to hide the cursor
                            loop
                        />

                    </Typography>
                    <Typography component="div" sx={{ marginTop: "30px", textAlign: "center", fontSize: "20px", lineHeight: "176%", color: "#8c99ab", padding: "2%" }}>
                        Assisting organizations, attain marketing excellence, with our
                        advanced analytics and ultra-intelligent AI models
                    </Typography>
                    <Box>
                        {/* Use Link for navigation */}

                        <Link to="/service" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size='large' sx={{
                                marginTop: "30px", backgroundColor: "#d6ff41", color: "black", fontSize: "18px", borderRadius: "15px", lineHeight: "140%", textAlign: "center", '&:hover': {
                                    backgroundColor: '#d6ff41',
                                }
                            }}>Watch Demo</Button>
                        </Link>
                    </Box>
                </Typography>
            </Grid>

            {/* second item for image */}
            <Grid item md={6} sx={12}>
                <img src={Logo} width={"100%"} alt="Skewb Logo" />
            </Grid>
        </Grid>
    );
}

export default HeroSection;
