// mui imports
import { Box, CssBaseline } from "@mui/material";
import About from "./pages/About";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./homeComponents/Navbar";
import Service from "./pages/Service";
//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Explore from "./industryContactComp/Explore";
import Blog from "./BlogCompo/Blog";





// theme

let theme = createTheme({
  palette: {
    background: {
      default: "black", // Set the default background color
    },
    themeColor: "#d6ff41",
    bgColor: "#1c2427",
  },

  typography: {
    fontFamily: ["Inter"].join(","),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} exact />
            {/* <Route path="/about" element={<div style={{color: "red", backgroundColor: "yellow"}}>Hello from about</div>} exact /> */}
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/explore"  element={<Explore />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Box>
      </ThemeProvider>

    </BrowserRouter>
    


  );
};

export default App;