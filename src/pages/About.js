import React from 'react'
import AboutPage from '../aboutComponent/AboutPage'
import Navbar from '../homeComponents/Navbar';

function About() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
    <Navbar />
   <AboutPage />
   </>
  )
}

export default About