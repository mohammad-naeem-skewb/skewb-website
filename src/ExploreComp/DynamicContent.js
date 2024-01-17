import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
 
const DynamicContent = ({ heading, photoUrl,heading2, content }) => (
  <Paper elevation={3} style={{ backgroundColor: 'black', color: 'white', padding: '5%', marginTop: '7%', textAlign: 'center' }}>
    <Typography variant="h2" gutterBottom>
      {heading}
    </Typography>
    <img src={photoUrl} alt="Dynamic Photo" style={{ maxWidth: '75%', marginBottom: '5%', marginTop: '10%' }} />
    <Typography variant="h4" style={{fontSize : "18px%" , color :'white' , paddingLeft: '15%', paddingRight : '15%', textAlign: 'left', paddingBottom : '2%'}}>
      {heading2}
    </Typography>
    <Typography variant="body1" style={{fontSize : "28px%" , color :'#5c8a8a' , paddingLeft: '15%', paddingRight : '15%' , textAlign: 'left' , fontFamily: 'Inter'}}>
      {content}
    </Typography>
  </Paper>
);
 
export default DynamicContent;