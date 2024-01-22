import React from 'react'
import Services from '../servicesComponets/Services'
import Navbar from '../homeComponents/Navbar';

function Service() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
    <Navbar />
   <Services />
   </>
  )
}

export default Service