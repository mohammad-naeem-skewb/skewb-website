import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

import post1 from "../assets/Blogs and articles/post1.png";
import article_by_sandeep_sir from "../assets/Blogs and articles/article_by_sandeep_sir.png";
import g20 from "../assets/Blogs and articles/G20.png";
import toi_article from "../assets/Blogs and articles/toi_article.png";
import Footer from "../pages/Footer";
import Navbar from "../homeComponents/Navbar";
import SmallCards from "./SmallCards";

const Blog = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // const [blogData, setBlogData] = useState([]);
  const [sliceLastTwoData, setSliceLastTwoData] = useState([]);
  const [sliceFirstToSecondLast, setSliceFirstToSecondLast] = useState([]);
  const [sliceFirstFourToLast, setSliceFirstToLast] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://15.207.123.147:8000/resources/blog/"
      );
      const responsJson = await response.json();
      // for top two news
      setSliceLastTwoData(responsJson.slice(0, 3));

      // for top three and four news
      setSliceFirstToSecondLast(responsJson.slice(2, 4));

      //for news from top 4 to last....
      // sliceFirstFourToLast(responsJson.slice(0,responsJson.length));
      setSliceFirstToLast(responsJson.slice(4));
      console.log(sliceFirstFourToLast);
    }
    getData();
  }, []);

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
            {sliceLastTwoData.length > 0 && (
              <div>
                <a
                  href={sliceLastTwoData[0].resource_url}
                  target="_blank"
                  alt="image_blog"
                  rel="noopener noreferrer"
                >
                  <img
                    src={sliceLastTwoData[0].image}
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
                  {sliceLastTwoData[0].tittle}
                  <br />
                  {sliceLastTwoData[0].resourse_text}
                </Typography>
              </div>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {sliceLastTwoData.length > 0 && (
            <Paper
              sx={{
                width: "95%",
                borderRadius: "20px",
                transition: "transform 0.3s ease-in-out", // Added transition property
                position: "relative",
                overflow: "hidden",
                height: "45%",
                marginLeft: "3%",
                ":hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <a
                href={sliceLastTwoData[1].resource_url}
                target="_blank"
                alt="image_blog"
                rel="noopener noreferrer"
              >
                <img
                  src={sliceLastTwoData[1].image}
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
                {sliceLastTwoData[1].tittle}
                <br></br> {sliceLastTwoData[1].resourse_text}
              </Typography>
            </Paper>
          )}
          <Box
            style={{
              display: "flex",
              height: "39%",
            }}
          >
            {sliceFirstToSecondLast &&
              sliceFirstToSecondLast.map((ele) => {
                return (
                  <SmallCards
                    img={ele.image}
                    title={ele.tittle}
                    url={ele.resource_url}
                    resource_text={ele.resourse_text}
                  />
                );
              })}
          </Box>
        </Grid>
        <Box
          style={{
            display: "flex",
            // height: "39%",
          }}
        >
          {sliceFirstFourToLast &&
            sliceFirstFourToLast.map((ele) => {
              return (
                <SmallCards
                  img={ele.image}
                  title={ele.tittle}
                  url={ele.resource_url}
                  resource_text={ele.resourse_text}
                />
              );
            })}
        </Box>
        <Footer />
      </Grid>
    </>
  );
};

export default Blog;
