import logo from "../assets/skewbFooter.svg";
import cube from "../assets/skewb_logo.gif";
import React from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  Paper,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
const SocialIcon = ({ icon, link, text }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
    }}
  >
    {React.cloneElement(icon, {
      style: { fontSize: 30, color: "#d6ff41", marginRight: "8px" },
    })}{" "}
    {/* Adjust the font size and spacing as needed */}
    <span style={{ color: "#8c99ab" }}>{text}</span>
  </a>
);

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, color: "#e6ffe6", padding: "2%" }}>
      <Box
        sx={{
          borderTop: "1px solid #d6ff41",
          marginTop: "5%",
          paddingTop: "2%",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ backgroundColor: "black", padding: "1%" }}
        >
          <Grid item xs={12} md={4.5}>
            <Paper
              style={{
                padding: "2%",
                backgroundColor: "black",
                textAlign: "left", // Default left alignment
                "@media (max-width:600px)": {
                  textAlign: "center", // Center align on screens with max-width 600px (mobile)
                },
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  src={cube}
                  alt="Company Logo 1"
                  style={{ marginTop: "2%", width: "20%" }} // Increased the size of the image
                />
                <img
                  src={logo}
                  alt="Company Logo 2"
                  style={{ marginTop: "2%", width: "20%" }} // Increased the size of the image
                />
              </div>

              <Typography>
                <br />
              </Typography>

              <Typography
                variant="body2"
                color="#B4D0B4"
                sx={{
                  color: "#8c99ab",
                  fontSize: "16px",
                  lineHeight: "176%",
                }}
              >
                Assisting organizations, attain marketing excellence, with our
                advanced analytics and ultra-intelligent AI models
                <Typography>
                  <br />
                </Typography>
              </Typography>
              <Typography>
                <br />
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                }}
              >
                <Link
                  href="mailto:info@skewb.ai"
                  style={{ color: "#d6ff41", textDecoration: "none" }}
                  sx={{
                    "&:hover": {
                      color: "#8c99ab", // Change color on hover
                    },
                  }}
                >
                  <u>info@skewb.ai</u>
                </Link>
              </Typography>
              <Typography>
                <br />
                <br />
              </Typography>
            </Paper>
          </Grid>

          {/* Quick Links Grid */}
          <Grid item xs={6} md={2}>
            <Paper
              style={{
                padding: "2%",
                backgroundColor: "black",
                textAlign: "left",
                marginLeft: "25%",
                marginTop: "45px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",

                  marginBottom: "20px",
                }}
              >
                <strong>Quick Links</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  marginBottom: "12px",
                }}
              >
                <Link
                  href="#"
                  style={{ color: "#8c99ab", textDecoration: "none" }}
                >
                  Home
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  marginBottom: "12px",
                }}
              >
                <Link
                  href="#"
                  style={{ color: "#8c99ab", textDecoration: "none" }}
                >
                  About
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  marginBottom: "12px",
                }}
              >
                <Link
                  href="#"
                  style={{ color: "#8c99ab", textDecoration: "none" }}
                >
                  Services
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  marginBottom: "12px",
                }}
              >
                <Link
                  href="#"
                  style={{ color: "#8c99ab", textDecoration: "none" }}
                >
                  Industries
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  marginBottom: "12px",
                }}
              >
                <Link
                  href="#"
                  style={{ color: "#8c99ab", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </Typography>
            </Paper>
          </Grid>

          {/* Social Icons Grid */}
          <Grid item xs={6} md={1.5}>
            <Paper
              style={{
                padding: "2%",
                backgroundColor: "black",
                textAlign: "left",
                marginLeft: "20%",
                marginTop: "45px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <strong>Social</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  marginBottom: "12px",
                }}
              >
                <SocialIcon
                  icon={<LinkedInIcon />}
                  link="https://in.linkedin.com/company/skewb-analytics?trk=similar-pages"
                />
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  marginBottom: "12px",
                }}
              >
                <SocialIcon
                  icon={<InstagramIcon />}
                  link="https://www.instagram.com/skewb.analytics?igsh=MTloa285Y3h5eHpwNA=="
                />
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  marginBottom: "12px",
                }}
              >
                <SocialIcon
                  icon={<TwitterIcon />}
                  link="https://twitter.com/skewb_analytics?lang=en"
                />
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  marginBottom: "12px",
                }}
              >
                <SocialIcon
                  icon={<YouTubeIcon />}
                  link="https://www.youtube.com/channel/UCZfKVPXW22m_JpSD7rykoTg"
                />
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Us  Grid */}
          <Grid item xs={12} md={4}>
            <Paper
              style={{
                padding: "2%",
                backgroundColor: "black",
                textAlign: "left",
                marginLeft: "5%",
                marginTop: "40px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#8c99ab",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <strong>Contact Us </strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <SocialIcon
                  icon={<HomeIcon />}
                  text="Plot # 1, Phase 1, Udyog Vihar, Sector 20, Gurugram, Haryana 122022"
                />
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginBottom: "24px",
                }}
              >
                <SocialIcon
                  icon={<LocationOnIcon />}
                  link="https://maps.app.goo.gl/XXeErGh3NXYrcRmK7"
                  text="Locate us on Map "
                />
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                <SocialIcon icon={<PhoneIcon />} text={"9604435108"} />
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: "#8c99ab",
            marginLeft: "15px",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          All rights reserved. Powered by{" "}
          <span style={{ fontWeight: "bold", color: "#d6ff41" }}>
            Skewb Analytics
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
