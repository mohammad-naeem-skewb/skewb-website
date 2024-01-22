import React from 'react';
import { Typography, Paper } from '@mui/material';
import image from "../assets/serviceAssets/m_a.png"
const Top = () => (
  <Paper elevation={3} style={{
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'white',
    padding: '5%',
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center',
    position: 'relative', // Set position to relative
    background: `url('${image}') center/cover`, // Use the provided image prop
    backgroundSize: '75%', 
    backgroundRepeat: 'no-repeat',
  }}>

    {/* Heading 1 */}
    <Typography variant="h2" gutterBottom>
    Marketing Analytics
    </Typography>
  </Paper>
);

export default Top;
