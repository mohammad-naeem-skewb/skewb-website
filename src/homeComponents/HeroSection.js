import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Logo from "../assets/skewb_logo.gif";

function HeroSection() {
    return (
        <Grid container sx={{ marginTop: "3%" }}>
            {/* first item for welcome content */}
            <Grid item md={6} sx={12} style={{}} display="flex" textAlign="center" alignItems="center" justifyContent={"center"}>
                <Typography sx={{ color: "white" }} component="div">
                    <Typography variant='h2' sx={{ lineHeight: "103%", fontFamily: "Sora, sans-serif", fontWeight: "500", fontPalette: "80px" }}> Welcome To Skewb </Typography>
                    <Typography component="div" sx={{ marginTop: "30px", textAlign: "center", fontSize: "20px", lineHeight: "176%", color: "#8c99ab", padding: "2%" }}>
                        Assisting organizations, attain marketing excellence, with our
                        advanced analytics and ultra-intelligent AI models
                    </Typography>
                    <Box>
                        {/* Use Link for navigation */}
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size='large' sx={{
                                marginRight: "2%", marginTop: "30px", backgroundColor: "#d6ff41", color: "black", fontSize: "18px", borderRadius: "15px", lineHeight: "140%", textAlign: "center", '&:hover': {
                                    backgroundColor: '#d6ff41',
                                }
                            }}>Get Started</Button>
                        </Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size='large' sx={{
                                marginTop: "30px", backgroundColor: "#d6ff41", color: "black", fontSize: "18px", borderRadius: "15px", lineHeight: "140%", textAlign: "center", '&:hover': {
                                    backgroundColor: '#d6ff41',
                                }
                            }}>Get Demo</Button>
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
