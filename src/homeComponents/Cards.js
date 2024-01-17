import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import Quotes from "../assets/Quotes.svg"
import closingQuotes from "../assets/closing_quotes.svg"

function Cards({ image, content }) {
    return (


        <Box item xs={12} md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "80%", height: "40%", color: '#B4D0B4' }}>
            <Card sx={{ borderRadius: '20px', width: "80%", backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#99cc00' }}>
                <CardActionArea sx={{ textAlign: "center" }}>
                    <Box sx={{ width: "30%", marginLeft: "5%" }}>
                        <CardMedia
                            component="img"
                            image={image}
                        />
                    </Box>
                    <CardContent>

                        <Box variant="body2" color="#B4D0B4" sx={{ fontSize: "17px", fontStyle: "italic", padding: "3%", lineHeight: "160%", textAlign: "justify" }} >
                            {/* <CardMedia style={{ width: "20px" }}
                                component="img"
                                image={Quotes}
                            /> */}
                            <Typography variant='div'> <span style={{fontSize:"40px"}} > "</span>{content}<span style={{fontSize:"40px"}} >"</span></Typography>
                            {/* <CardMedia style={{ width: "20px" }}
                                component="img"
                                image={closingQuotes}
                            /> */}

                        </Box>

                    </CardContent>
                </CardActionArea>

            </Card>

        </Box>

    )
}

export default Cards