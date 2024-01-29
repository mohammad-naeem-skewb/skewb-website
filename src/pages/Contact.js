import { Box } from "@mui/material";

import Uptext from "../industryContactComp/Uptext";
import Lowertext from "../industryContactComp/Lowertext";
import Form from "../contactComp/Form";
import Footer from "./Footer";
import Navbar from "../homeComponents/Navbar";

const Contact = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",       
        }}
      >
        <Uptext />
        <Form />
        <Lowertext />
      </Box>
      <Footer />
    </>
  );
};

export default Contact;

