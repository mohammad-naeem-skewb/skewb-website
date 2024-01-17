import React from 'react'
import contactUs from '../constants/contactUs';
import { Typography, Button, Box, Card, CardContent, Grid, TextField } from "@mui/material";

export default function Lowertext() {
  return (
    <Box  sx={{ color: "white", textAlign: "center", width:'50%',padding:'4%',paddingTop:'2%' }}> <Typography variant="h3">
    {contactUs.text3}
  </Typography>
  <Typography variant="h5" component="p" sx={{ color: "grey"}}>
    {contactUs.text4}
  </Typography></Box>
  )
}
