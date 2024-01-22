import { Box, Grid } from "@mui/material";

import IndCard from "../industryContactComp/IndCard";
import Indtext from "../industryContactComp/indtext";
import Subscribe from "../industryContactComp/Subscribe";

import img1 from "../assets/contactIndustryAssets/Image1.svg";
import img2 from "../assets/contactIndustryAssets/image2.svg";
import img3 from "../assets/contactIndustryAssets/image3.svg";
import img4 from "../assets/contactIndustryAssets/image4.svg";
import img5 from "../assets/contactIndustryAssets/image5.svg";
import img6 from "../assets/contactIndustryAssets/image6.svg";
import img7 from "../assets/contactIndustryAssets/image7.svg";
import img8 from "../assets/contactIndustryAssets/image8.svg";
import img9 from "../assets/contactIndustryAssets/image9.svg";
import Footer from "./Footer";
import Navbar from "../homeComponents/Navbar";

const Industries = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const cardContentArr = [
    {
      image: img1,
      heading: "CPG/ FMCG",
      content:
        "The global FMCG market is set to reach $15 trillion by 2025 at a CAGR of 5.4% ",
    },
    {
      image: img2,
      heading: "  Tech & E-Com",
      content:
        "The global e-com market size is set to grow at a CAGR of 14.7% from 2020 till 2027",
    },
    {
      image: img3,
      heading: "Retail ",
      content:
        " In the retail market, USD 5.5 trillion will be generated through online sales by 2022.",
    },
    {
      image: img4,
      heading: "Telecom ",
      content:
        "The Telecom industry is set to expand at a CAGR of 5.4% from 2021 to 2028.",
    },
    {
      image: img5,
      heading: "Pharma ",
      content:
        "The global pharmaceutical market is expected to grow at a CAGR of 11.34% from 2021 to 2028. ",
    },
    {
      image: img6,
      heading: " Automobile",
      content:
        "It is projected that the global Automobile industry will grow to just under $9 trillion by 2030. ",
    },
    {
      image: img7,
      heading: "Banking & Finance",
      content:
        " The financial services market size is further expected to reach $28.5 trillion by 2025 at a CAGR of approximately 6%.",
    },
    {
      image: img8,
      heading: "Hospitality ",
      content:
        "The global hospitality market size is expected to grow from $3.9 T in 2021 to $4.5 T in 2022 at a CAGR of 15.1%.",
    },
    {
      image: img9,
      heading: " Luxury",
      content:
        "The luxury goods market is estimated to grow by USD 33.53 billion, growing at a CAGR of over 2.59% between 2020 and 2025.",
    },
  ];
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
            padding:"0% 5% 5% 5%",
          border: "2px solid red",
          //   backgroundImage:'radial-gradient(circle farthest-side at 50% -170%, rgba(0, 0, 0, 0), #000), linear-gradient(#d6ff41, rgba(0, 0, 0, 0))',
        }}
      >
        <Indtext />

        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            // marginLeft:"4%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {/* Add container and spacing */}{" "}
          {cardContentArr.map((ele, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              {/* Set each item to take 4 columns (1/3 of the grid) */}{" "}
              <IndCard
                img={ele.image}
                heading={ele.heading}
                content={ele.content}
              />{" "}
            </Grid>
          ))}
        </Grid>

        <Box>
          <Subscribe />
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
export default Industries;
