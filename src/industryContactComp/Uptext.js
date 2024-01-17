import React from 'react'
import { Typography, Box } from "@mui/material";
import contactUs from '../constants/contactUs';
export default function () {
  return (
    <Box  sx={{ color: "white", textAlign: "center", width:'50%',paddingTop:'5%' }}> <Typography variant="h1" >
    {contactUs.text1}
  </Typography>
  <Typography variant="h5" component="p" sx={{ color: "grey",margin:'2%',paddingBottom:'2%'}}>
    {contactUs.text2}
  </Typography></Box>
  )
}
