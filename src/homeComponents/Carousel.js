import { Container, Typography, Grid, Box } from '@mui/material';
import React, { useState } from 'react'


function Carousel({ img, content, heading }) {

    return (

        <Box sx={{ color: "white", position: "relative" }} >
            <Box sx={{ color: "#ffffff", display: "flex", alignItems: "center", marginTop: "0px", padding: "5%" }} >
                {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}> */}
                {/* <ArrowBackIosIcon onClick={prevSlider} /> */}
                {/* <ArrowForwardIosIcon /> */}
                {/* </Box> */}

                <Box sx={{ width: "100%", padding: "5%" }}>
                    <img src={img} width={"100%"} height={"100%"} />
                </Box>
                <Box sx={{ marginTop: "5%", width: "100%", padding: "3%" }}>
                    <Typography variant='h2'>
                        {heading}
                    </Typography>
                    <Typography sx={{ marginTop: "5%", textAlign: "center" }}>
                        {content}
                    </Typography>
                </Box>

                <Box>

                </Box>
                {/* <ArrowForwardIosIcon onClick={nextSlide} /> */}


            </Box>

        </Box>

    )
}

export default Carousel

























