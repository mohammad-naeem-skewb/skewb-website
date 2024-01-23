import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

import post1 from "../assets/Blogs and articles/post1.png";
import article_by_sandeep_sir from "../assets/Blogs and articles/article_by_sandeep_sir.png";
import g20 from "../assets/Blogs and articles/G20.png";
import toi_article from "../assets/Blogs and articles/toi_article.png";
import Footer from "../pages/Footer";
import Navbar from "../homeComponents/Navbar";

const Blog = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Navbar />
      <Grid container spacing={2} sx={{ padding: "3% 2%" }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              width: "100%",
              borderRadius: "20px",

              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <div>
              <a
                href="https://startupbubble.news/who-are-indias-pioneering-analytics-startups-transforming-the-tech-ecosystem/"
                target="_blank" alt=" "
              >
                <img
                  src={post1}
                  alt="Card 1"
                  style={{ width: "100%", height: "80%" }}
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
                  fontSize: "medium",
                }}
              >
                Who are India’s Pioneering Analytics Startups Transforming the
                Tech Ecosystem?
                <br />- by Startup Bubble News
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              width: "95%",
              borderRadius: "20px",
              transition: "transform 0.3s ease-in-out", // Added transition property
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              height: "45%",
              marginLeft: "3%",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <a
              href="https://www.financialexpress.com/life/technology-privacy-rules-make-econometrics-powered-marketing-analytics-model-popular-3060771/ "
              target="_blank"
            >
              <img
                src={article_by_sandeep_sir}
                alt="Card 2"
                style={{ width: "100%", height: "auto" }}
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
                fontSize: "medium",
              }}
            >
              Privacy rules make econometrics-powered marketing analytics model
              popular By Sandeep Pandey
              <br></br> Financial Express
            </Typography>
          </Paper>
          <Box
            style={{
              display: "flex",
              height: "39%",
            }}
          >
            <Paper
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
                href="https://www.linkedin.com/posts/sandeeppandey100_ready-to-showcase-our-product-and-our-transformative-activity-7081524295180460033-vvZl?utm_source=share&utm_medium=member_android "
                target="_blank" alt="sandeep_pandey" rel=""
              >
                <img
                  src={g20}
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
                Product Showcasing at Startup20 organised by G20 India
              </Typography>
            </Paper>

            <Paper
              sx={{
                width: "100%",
                borderRadius: "20px",
                transition: "transform 0.3s ease-in-out", // Added transition property
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
                href=" https://timesofindia.indiatimes.com/business/india-business/no-code-platforms-for-marketing-analytics/articleshow/101502580.cms"
                target="_blank"
              >
                <img
                  src={toi_article}
                  alt="Card 4"
                  style={{ width: "100%", height: "100%" }}
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
                No-code platforms for marketing analytics <br />- Times of India
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Footer />
      </Grid>
    </>

  );
};

export default Blog;
