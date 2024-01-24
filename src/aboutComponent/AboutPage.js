import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import img from "../assets/serviceAssets/skewb_workflow.gif";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Button, CardActions } from "@mui/material";
import { motion, easing } from "framer-motion";
import FounderCard from "./FounderCard";
import Footer from "../pages/Footer";
import SandipSir from "./SandipSir";
import Kavita from "../assets/Kavita.png";
import AwardCarousel from "./AwardCarousel";
const AboutPage = React.memo(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const customEase = [0.6, -0.05, 0.01, 0.99];



  const FoundersArr = [
    {
      img: "https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/6329482596255e67dc05eced_Snigdha%20Gupta.png",
      name: "Snigdha Gupta",
      position: "CO-FOUNDER & CPO ",
      url: "https://www.linkedin.com/in/snigdha-gupta-88a31a45/ ",
      content:
        "An analytics expert, Snigdha has worked across industries and business endeavors with a proven track record in helping clients solve their most complicated challenges. ",
    },
    {
      img: "https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/63294824becdfe367e995de1_Shubham%20Chajjed.png ",
      name: "Shubham Chhajed ",
      position: " CO-FOUNDER & CTO",
      url: "https://www.linkedin.com/in/shubham-chhajed-04b49251/ ",
      content:
        "As an expert in embracing agile transformations from concept to execution, Shubham has aided in implementing efficient and cost-effective technologies that optimize value from day one.",
    },
    {
      img: Kavita,
      name: " Kavita Nair",
      position: " Advisor",
      url: "https://www.linkedin.com/in/shubham-chhajed-04b49251/ ",
      content:
        " Kavita Nair, the chief digital transformation officer and marketing head has moved on from the company. After spending nearly 20 years working at Vi (formerly Vodafone-India), Kavita Nair has moved on from the company.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, color: "#e6ffe6" }}>
      <Grid container spacing={3} sx={{ padding: "2%" }}>
        <Grid item xs={12} md={6} style={{ paddingTop: "4%", marginTop: "8%" }}>
          <motion.div
            style={{ textRendering: "optimizeLegibility" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: customEase, delay: 0.2 }}
          >
            <Typography variant="h3" gutterBottom>
              <div
                style={{
                  textAlign: "center",

                  letterSpacing: "-.5px",
                  fontFamily: "Sora, sans-serif",
                  lineHeight: "120%",
                  color: "#ffffff",
                }}
              >
                What is Skewb?
              </div>
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                color: "#8c99ab",
                fontFamily: " Inter, sans-serif",
                fontSize: "20px",
                lineHeight: "176%",
                textAlign: "center",
              }}
            >
              The future of marketing analytics assisted by ultra-intelligent
              AI. We deliver personalized and hyper-effective analytical
              solutions to enable organizations attain marketing excellence like
              never before.
            </Typography>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2%",
            // border:"2px solid red",
            marginTop: "4%",
            marginLeft: isMatch || isMatchSmall ? "3%" : "0"

          }}
        >
          <motion.div
            style={{ textRendering: "optimizeLegibility" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: customEase, delay: 0.2 }}
          >
            <img
              src={img}
              alt="Skewb Workflow"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: "2%", paddingTop: "8%", marginLeft: isMatch || isMatchSmall ? "5%" : "0" }}>
          <motion.div
            style={{ textRendering: "optimizeLegibility" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: customEase, delay: 0.2 }}
          >
            <Card
              sx={{
                Width: 900,
                Height: 125,
                borderRadius: "5%",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                boxShadow: "1px 1px 1px #d6ff41",
                color: "#d6ff41",
                marginTop: "10%",



              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // border: "2px red solid",
                    transition: "all .2s",
                    ":hover": {

                      boxShadow: "2px 4px 0px #black",
                      transform: "translateY(-10px)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <div>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        color: "white",
                        letterSpacing: "-.5px",
                        marginBottom: "22px",
                        fontFamily: "Sora, sans-serif",
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "120%",
                      }}
                    >
                      <FlagOutlinedIcon
                        fontSize="large"
                        style={{ marginRight: "8%" }}
                      />{" "}
                      Our Mission
                    </Typography>
                    {/* font-family: Inter, sans-serif;
    font-size: 18px;
    line-height: 180%; */}
                    <Typography variant="body2" color="#B4D0B4">
                      <Typography
                        sx={{
                          color: "#8c99ab",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          lineHeight: "180%",
                        }}
                      >
                        Skewb has been established with the mission to assist
                        organizations in attaining marketing excellence , backed
                        by our ultra - intelligent AI models.
                      </Typography>
                      <br />
                      <br />
                      <br />
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: "2%", paddingTop: "8%", marginLeft: isMatch || isMatchSmall ? "5%" : "0" }}>
          <motion.div
            style={{ textRendering: "optimizeLegibility" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: customEase, delay: 0.2 }}
          >
            <Card
              sx={{
                Width: 900,
                Height: 125,
                borderRadius: "5%",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                boxShadow: "1px 1px 1px #d6ff41",
                color: "#d6ff41",
                marginTop: "10%",
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // border: "2px red solid",
                    transition: "all .2s",
                    ":hover": {
                      boxShadow: "none",
                      boxShadow: "2px 4px 0px #black",
                      transform: "translateY(-10px)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <div>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        color: "white",
                        letterSpacing: "-.5px",
                        marginBottom: "22px",
                        fontFamily: "Sora, sans-serif",
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "120%",
                      }}
                    >
                      <StarBorderOutlinedIcon
                        fontSize="large"
                        style={{ marginRight: "8%" }}
                      />{" "}
                      Why Skewb?
                    </Typography>
                    <Typography variant="body2" color="#B4D0B4">
                      <Typography
                        sx={{
                          color: "#8c99ab",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          lineHeight: "180%",
                        }}
                      >
                        The current market scenario calls for a more dynamic
                        approach that is both analytical & advisory. Our
                        advanced AI solutions help you take the next step with
                        prescriptive analytics with exceptionally high accuracy.
                      </Typography>
                      <br />
                      <br />
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>

        <Box sx={{ padding: "3%" }}>
          <Box sx={{ padding: "5%" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",

                letterSpacing: "-.5px",
                fontFamily: "Sora, sans-serif",

                lineHeight: "120%",
                color: "#ffffff",
                padding: "5%"
              }}
            >
              {" "}
              We're a team of experienced analytics enthusiasts{" "}
            </Typography>
            <Typography
              variant="div"
              sx={{
                color: "#8c99ab",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                lineHeight: "180%",
                // padding:"5%",
                // border:"2px solid ted"
              }}
            >
              {" "}
              Skewb’s experienced leadership team packs in a combined experience
              of over 40+ years from various backgrounds and specializations in
              analytics. All to help brands get concrete and favourable results
              by leveraging their extensive experience.{" "}
            </Typography>
          </Box>

          <Box></Box>
        </Box>


        {isMatch || isMatchSmall ? <Grid
          item
          xs={12}
          md={4}
          spacing={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#B4D0B4",
          }}
        > <FounderCard img="https://assets-global.website-files.com/61eaca7810877f7aff9aaa4f/632948254201ff0a3232694f_Sandeep%20Pandey.png" name="Sandeep Pandey" position="CO-FOUNDER & CEO" content="Sandeep is a global leader in the field of Analytical consulting and digital transformation. He has a unique acumen for understanding data, its versatility and application beyond businesses along with a strong analytics consulting experience." url="https://in.linkedin.com/in/sandeeppandey100" /></Grid> : <SandipSir />}

        {FoundersArr &&

          FoundersArr.map((ele) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                spacing={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // border: "2px solid blue",
                  color: "#B4D0B4",
                  // width:"100%",
                  padding:"3%"
                }}
              >


                <FounderCard
                  img={ele.img}
                  content={ele.content}
                  position={ele.position}
                  name={ele.name}
                  url={ele.url}
                />
              </Grid>
            );
          })}

        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#B4D0B4",
          }}
        >
          <Typography variant="h4" gutterBottom>
            <center sx={{ marginBottom: "50%" }} >Awards and Recognitions </center>



            <Typography variant="subtitle1" gutterBottom sx={{ padding: "2% 2% 0 2%" }}>
              <center>
                We are excited to share our recent awards and recognition. We
                work diligently to make our clients happy, always upholding
                strong ethical standards and delivering excellent service. This
                isn't just good for business – it's part of our identity. When
                recognized by esteemed organizations, it reinforces that we're
                on the right path, driven by our core values. Thank you for
                being part of our success story!
              </center>
            </Typography>
          </Typography>
        </Grid>
        {/* <Box sx={{display:"flex", justifyContent:"center", width:"50%", border:"2px solid red", marginLeft:""}}>
        <marquee>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: isMatchSmall ? "column" : "row",
              alignItems: isMatchSmall && "center",
              width: "100%",

              justifyContent: "space-evenly",
              gap: isMatch && "15px",
            }}
          >
            {awardsArr &&
              awardsArr.map((ele) => {
                return <AwardCard name={ele.AwardName} img={ele.img} />;
              })}
          </Grid>
        </marquee>
        </Box> */}

        {/* <Box sx={{ padding: '3%' }}>
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    effect="fade" // Use 'fade' for smoother transitions
    speed={800} // Set the transition speed in milliseconds
    direction="horizontal" // Set the direction to 'horizontal'
    loop={true} // Enable loop to make it continuous
  >
    {testimonialArr.map((item, index) => (
      <SwiperSlide key={index}>
        <Cards image={item.image} content={item.content} />
      </SwiperSlide>
    ))}
  </Swiper>
</Box> */}



      </Grid>
      <AwardCarousel />

      <Footer />
    </Box>
  );
});

export default AboutPage;
