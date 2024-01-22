import React from 'react'
import Navbar from '../homeComponents/Navbar'
import HeroSection from '../homeComponents/HeroSection'
import Testimonials from '../homeComponents/Testimonials'
import Cards from '../homeComponents/Cards'
import AutoCarousel from '../homeComponents/AutoCarousel'
import Footer from './Footer'


function Home() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Navbar />
      <HeroSection />
     
      <AutoCarousel />
      <Testimonials />
      <Footer />
     
      
    </>
  )
}

export default Home