import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from "../assets/skewblogo.svg"
const SocialIcon = ({ icon, link, alt }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {React.cloneElement(icon, { style: { color: '#d6ff41' } })}
    <span style={{ marginLeft: '8%', color: 'white', padding: '2%' }}>{alt}</span>
  </a>
);

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, color: '#e6ffe6', padding: '5%' }}>

      <Box sx={{ borderTop: '1px solid #d6ff41', marginTop: '5%', paddingTop: '2%', textAlign: 'center' }}>

        <img src={logo} alt="Company Logo" style={{ marginTop: '2%', width: '12%' }} />
        <Typography><br /></Typography>


        <Typography variant="body2" color="#B4D0B4" fontSize={'1.5rem'}>
          Assisting organizations, attain marketing excellence, with our advanced analytics and ultra-intelligent AI models
          <Typography><br /></Typography>
        </Typography>
        <Typography variant="body2" color="#d6ff41">

          <Link href="mailto:info@skewb.ai" style={{ color: '#d6ff41' }} visited={{ color: 'blue' }}>info@skewb.ai</Link>
        </Typography>
        <Typography variant="body2" color="#B4D0B4" style={{ marginTop: '2%', fontWeight: 'bold' }}>
          Quick Links
          <Typography><br /></Typography>
        </Typography>
        <Typography variant="body2" color="#B4D0B4">
          <Link href="home-link" style={{ marginRight: '3%', color: 'inherit' }} visited={{ color: 'blue' }}>Home</Link>
          <Link href="about-link" style={{ marginRight: '3%', color: 'inherit' }} visited={{ color: 'blue' }}>About</Link>
          <Link href="services-link" style={{ marginRight: '3%', color: 'inherit' }} visited={{ color: 'blue' }}>Services</Link>
          <Link href="industries-link" style={{ marginRight: '3%', color: 'inherit' }} visited={{ color: 'blue' }}>Industries</Link>
          <Link href="contact-link" style={{ color: 'inherit' }} visited={{ color: 'blue' }}>Contact</Link>
        </Typography>

        <Typography variant="body2" color="#B4D0B4" style={{ marginTop: '2%', fontWeight: 'bold' }}>
          Social
          <Typography><br /></Typography>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <SocialIcon icon={<LinkedInIcon />} link="your-linkedin-url" alt="LinkedIn" />
          <SocialIcon icon={<InstagramIcon />} link="your-instagram-url" alt="Instagram" />
          <SocialIcon icon={<TwitterIcon />} link="your-twitter-url" alt="Twitter" />
          <SocialIcon icon={<YouTubeIcon />} link="your-youtube-url" alt="YouTube" />
        </Box>
        <Typography variant="body2" color="#B4D0B4" style={{ marginTop: '2%' }}>
          All rights reserved. Powered by <b>Skewb Analytics</b>
        </Typography>



      </Box>
    </Box>
  );
}

export default Footer;
