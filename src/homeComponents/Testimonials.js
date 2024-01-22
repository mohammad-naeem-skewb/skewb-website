import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Testimonials.css"
import wavemaker from "../assets/wavemaker.png"
import delhivery from "../assets/Delhivery_logo.png"
import cloudNine from "../assets/cloudNine.svg"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Card, Typography } from '@mui/material';
import Cards from './Cards';

export default function Testimonials() {

    const testimonialArr = [
        {
            image: delhivery,
            content:
                'We have seen remarkable benefits using Skewb solution, not only in the time-saving aspects of quick turnaround analytics, but also in the level of insight one can get from the media and marketing data. Skewb prescriptive analytics suite and simulation tool, has helped us take informed decisions for our growth strategy. Measuring the impact of strategies executed has been to the point. A big shoutout to Skewb for theirservice- Delhivery'
        },
        {
            image: wavemaker,
            content:
                'I would strongly recommend working with Skewb Analytics. The team is wonderful to work with and they care about making intelligent, informed decisions, based on robust mathematical modeling solutions.”- Amir Suherlan Managing Director, Wavemaker Indonesia'
        },
        {
            image: cloudNine,
            content:
                'Our interaction with Skewb analytics was a fruitful one. Skewb\'s agile measurement platform provided precise and accurate insights and predictions on our digital ROAS. Team\'s understanding about the advanced marketing analytics space and ability to replicate the same for the healthcare domain is commendable and helped us achieve our goal. We would highly rely on Skewb to help us solve complex marketing problems for Cloudnine.-Cloudnine'
        }
    ];

    console.log(testimonialArr)

    return (
        <Box sx={{ padding: '3%' }}>
            <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', fontSize: '66px', fontFamily: 'Sora, sans-serif', lineHeight: '106%', padding: '3%', marginBottom: '2%' }}>
                Hear from our Clients
            </Typography>
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
                direction="horizontal" // Set the direction to 'horizontal'
                loop={true} // Enable loop to make it continuous} // Initialize navigation
            >
                {testimonialArr.length > 0 &&
                    testimonialArr.map((item, index) => (
                        <SwiperSlide key={index}>

                            <Cards image={item.image} content={item.content} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Box>
    );
}






















