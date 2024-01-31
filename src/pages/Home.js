import React, { useState, useEffect } from "react";
import Navbar from "../homeComponents/Navbar";
import HeroSection from "../homeComponents/HeroSection";
import Testimonials from "../homeComponents/Testimonials";
import AutoCarousel from "../homeComponents/AutoCarousel";
import Footer from "./Footer";
 
function Home() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
 
  const [contentArrHomeCards, setContentArrHomeCards] = useState([]);
  const [client, setClient] = useState([]);
 
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
 
    const getData = async () => {
      try {
        const response = await fetch(
          "http://15.207.123.147:8000/api/home_card/",
          { signal }
        );
 
        const data = await response.json();
        setContentArrHomeCards(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };
 
    getData();
 
    return () => {
      // Cleanup function to cancel the request if the component is unmounted
      abortController.abort();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
 
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
 
    const getData = async () => {
      try {
        const response = await fetch("http://15.207.123.147:8000/api/client/", {
          signal,
        });
 
        const data = await response.json();
        setClient(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };
 
    getData();
 
    return () => {
      // Cleanup function to cancel the request if the component is unmounted
      abortController.abort();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
 
  return (
    <>
      <Navbar />
      <HeroSection />
 
      <AutoCarousel contentArrHomeCards={contentArrHomeCards} />
      <Testimonials client={client} />
      <Footer />
    </>
  );
}
 
export default Home;