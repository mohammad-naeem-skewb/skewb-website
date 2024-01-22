import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import './Testimonials.css';
import Carousel from './Carousel';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AutoCarousel() {
  const contentArray = [
    {
      image: img1,
      content: 'Go beyond basic insights with our AI-powered analytics tool that helps you build a sophisticated database & leverage it with effective planning & stunning accuracy',
      heading: 'Transformational leap in marketing analytics',
    },
    {
      image: img2,
      content: 'We take digital marketing analytics one step further with unparalleled prescriptive deep-dive. Our innovative end-to-end analytics solution gives you relevant data & helps in strategy formulation & planning at the lowest cuts',
      heading: 'Reinvent digital analytics, with Skewb',
    },
  ];

  return (
    <>
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
        loop={true} // Enable loop to make it continuous
      >
        {contentArray.map((ele, index) => (
          <SwiperSlide key={index}>
            <Carousel img={ele.image} content={ele.content} heading={ele.heading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
