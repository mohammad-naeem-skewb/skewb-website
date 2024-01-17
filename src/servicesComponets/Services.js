import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import img1 from "../assets/serviceAssets/tar.gif"
import img2 from "../assets/serviceAssets/cloud.gif"
import img3 from "../assets/serviceAssets/artificial.gif"
import Footer from '../pages/Footer';

import ma from '../assets/serviceAssets/m_a.png'
import da from '../assets/serviceAssets/d_a_.png'
import wa from '../assets/serviceAssets/w_a.png'
import ca from '../assets/serviceAssets/c_a.png'
import dg from '../assets/serviceAssets/dg.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselService from "./CarouselService"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Button, CardActions } from '@mui/material';


export default function Services() {
    const serviceArr = [{
        image: ma,
        heading: "Marketing Analytics",
        content: "Our Marketing Analytics solution is designed to solve the age-old problem of measuring marketing effectiveness. Our highly-evolved Marketing Analytics Solutions can help you get a higher return on your investment, aid in campaign planning and portfolio management, and much more!"
    }, {
        image: da,
        heading: "Digital Analytics",
        content: "Skewb’s artificial intelligence and machine learning-powered Digital Analytics Solutions empower your team by democratizing data across your entire marketing ecosystem.We take digital marketing analytics one step further with unparalleled prescriptive deep-dive."
    },
    {
        image: wa,
        heading: "Web Analytics",
        content: "Web analytics is the process of collecting and analyzing web data to understand and optimize web usage. It makes effectiveness measurement and performance tracking more relevant than ever."

    },
    {
        image: ca,
        heading: "CRM Analytics",
        content: "CRM Analytics is crucial to know your customers, personalize your marketing efforts, forecast future demand, and optimize omnichannel contact with relevant target audiences. Our advanced CRM analytics have been designed and developed to give you relevant insights for the best optimization."
    },
    {
        image: dg,
        heading: "Data Audit and Governance",
        content: "At Skewb, we believe it’s crucial to have an advanced level of data governance that identifies data elements and establish quality standards that ensure data collection, and sanity required for analytics and measurement."
    }]


    return (
        <Box sx={{ flexGrow: 1, color: '#e6ffe6', padding: '5%' }}>
            <Grid container spacing={3}>

                <Grid item xs={12} md={7} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%', paddingTop: '5%', paddingBottom: '0.25%', color: '#B4D0B4' }}>
                    <Typography variant="h3" gutterBottom>
                        <span style={{ color: '#d6ff41' }}><center>How can we help ? </center></span>
                        <Typography><br /> <br /> </Typography>

                        <Typography variant="subtitle1" gutterBottom  >
                            <span style={{ fontSize: '1.5rem' }}>
                                <center>At Skewb, we provide you with a range of customizable analytics services that help you track, analyze and strategize to achieve your desired objectives and outcomes in the best way possible
                                </center>
                            </span>
                        </Typography>
                    </Typography>
                </Grid>

                <Grid item xs={12} md={5} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%', paddingTop: '6%', paddingBottom: '0.25%', color: '#B4D0B4' }}>
                    <img src={require("../assets/serviceAssets/data.gif")} alt="Your alternative text" width="100%" height="auto" />
                </Grid>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    effect="fade" // Use 'fade' for smoother transitions
                    speed={800} // Set the transition speed in milliseconds
                    grabCursor={true} // Show grab cursor during dragging
                    loop={true} // Enable loop mode
                >
                    {serviceArr.map((ele, index) => (
                        <SwiperSlide key={index}>
                            <CarouselService img={ele.image} content={ele.content} heading={ele.heading} />
                        </SwiperSlide>
                    ))}
                </Swiper>




                <Grid item xs={12} md={5} style={{ paddingTop: '20%' }}>
                    <Typography variant="h3" gutterBottom>
                        <span style={{ color: '#d6ff41', display: 'flex', alignItems: 'center', justifyContent: 'center', }}> Product Demo</span>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom >
                        <span style={{ fontSize: '1.2rem' }}>
                            <center>

                                Discover efficiency like never before with our revolutionary data solutions. Introducing a seamless blend of advanced analytics and real-time processing for unparalleled insights. Elevate your business decisions effortlessly.</center>
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7} style={{ height: '120%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '15%' }}>
                    <video width="100%" height="auto" controls autoPlay muted>
                        <source src={require("../assets/serviceAssets/Skewb_Product_Demo.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Grid>
            </Grid>
            <Typography><br /><br /> </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12} md={4} style={{ maxWidth: '25rem', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6.75%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>


                            <CardContent>
                                <span style={{ height: '40%', width: '60%' }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Ensemble Model
                                    </Typography>
                                    <Typography><br /> </Typography>
                                    <CardMedia

                                        component="img"
                                        height="70%"
                                        image={img3}
                                        alt="Ensemble models"
                                        style={{ borderRadius: '50%' }}
                                    />
                                </span>
                                <Typography><br /><br /> </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    <span style={{ fontSize: '1.35rem' }}> <b>Millions of interactions</b></span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4} style={{ maxWidth: '25rem', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6.75%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>


                            <CardContent>
                                <span style={{ height: '40%', width: '40%' }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Cloud Infra
                                    </Typography>
                                    <Typography><br /> </Typography>
                                    <CardMedia

                                        component="img"
                                        height="70%"
                                        image={img2}
                                        alt="Cloud Infra"
                                        style={{ borderRadius: '50%' }}
                                    />
                                </span>
                                <Typography><br /><br /> </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    <span style={{ fontSize: '1.35rem' }}> <b>Scalable and Secure Tech</b></span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4} style={{ maxWidth: '25rem', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6.75%', color: '#B4D0B4' }}>
                    <Card sx={{ borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#d6ff41' }}>
                        <CardActionArea>


                            <CardContent>
                                <span style={{ height: '40%', width: '40%' }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Productive Power
                                    </Typography>
                                    <Typography><br /> </Typography>
                                    <CardMedia

                                        component="img"
                                        height="70%"
                                        image={img1}
                                        alt="Productive Power"
                                        style={{ borderRadius: '50%' }}
                                    />
                                </span>
                                <Typography><br /><br /> </Typography>
                                <Typography variant="body2" color="#B4D0B4">
                                    <span style={{ fontSize: '1.35rem' }}> <b>90%+ Forecasting accuracy</b></span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                </Grid>



            </Grid>
            <Box sx={{ flexGrow: 1, color: '#e6ffe6', padding: '2%' }}>

                <Box sx={{ marginTop: '0%', paddingLeft: '10%', paddingRight: '10%', textAlign: 'center' }}>

                    <Typography variant="body2" color="#B4D0B4">

                        <span style={{ fontSize: '1.65rem' }}>Skewb offers <b>personalized and hyper effective analytical solutions</b> through <b>advanced AI platform</b></span>
                    </Typography>




                </Box>

            </Box>
            <Footer />

        </Box>


    );
}