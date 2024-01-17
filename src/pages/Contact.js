import {  Box } from "@mui/material";
 
// constants
 
 
// import Form from "../components/FormInfo";
 
// import Lowertext from "../components/Lowertext";
// import Uptext from "../components/Uptext";
 import Uptext from "../industryContactComp/Uptext"
 import Lowertext from "../industryContactComp/Lowertext"
import Form from "../industryContactComp/FormInfo"
 import Footer from "./Footer";
 
const Contact = () => {
  return (
    <>
 
      <Box sx={{
        display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column", width: "100%"
      }} >
 
        <Uptext />
        <Form />
        <Lowertext />
       
   
 
      </Box>
      <Footer />
    </>
  );
};
 
export default Contact;