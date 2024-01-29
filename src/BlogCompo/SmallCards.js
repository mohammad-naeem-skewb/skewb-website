import { Box, Typography } from '@mui/material'
import React from 'react'

function SmallCards({img,resource_text, title, url}) {
  return (
    <Box
    sx={{
      width: "100%",
      borderRadius: "20px",

      position: "relative",
      overflow: "hidden",
      transition: "transform 0.3s ease-in-out",
      margin: "3%",
      ":hover": {
        transform: "scale(1.05)",
      },
    }}
  >
    <a
      href={url}
      target="_blank"
      alt="sandeep_pandey"
      rel=""
    >
      <img
        src={img}
        alt="Card 3"
        style={{ width: "100%", height: "auto%" }}
      />
    </a>
    <Typography
      variant="h6"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "8px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "small",
      }}
    >
         {title}
        <br></br>
        
   {resource_text}
    
     
    
    </Typography>
  </Box>
  )
}

export default SmallCards