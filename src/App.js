// mui imports
import { Container, CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";

// theme

let theme = createTheme({
  palette: {
    background: {
      default: "#1c2427", // Set the default background color
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
