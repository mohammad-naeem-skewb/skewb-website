import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = [
  "Skewb Analytics",
  "New Age Prescriptive Analytics",
  "Advanced AI Modules",
];

const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp((prevFadeProp) => ({
        fade: prevFadeProp.fade === "fade-in" ? "fade-out" : "fade-in",
      }));
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, []);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <Typography
      variant="h4"
      sx={{
        lineHeight: "100%",
        fontFamily: "Sora, sans-serif",
        fontWeight: "500",
        fontPalette: "80px",
        
       
      }}
      className={fadeProp.fade}
    >
     <h3> Welcome To </h3> {WORDS_TO_ANIMATE[wordOrder]}
      
    </Typography>

    
  );
};

export default AnimatedText;

// lineHeight: "100%",
//         fontFamily: "Sora, sans-serif",
//         fontWeight: "500",
//         fontPalette: "80px",