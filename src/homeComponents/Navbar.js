import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link, useLocation } from "react-router-dom";
import skewbLogo from "../assets/skewblogo.svg";

function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const getPathIndex = (pathname) => {
    switch (pathname) {
      case "/":
        return 0;
      case "/about":
        return 1;
      case "/service":
        return 2;
      case "/industries":
        return 3;
      case "/contact":
        return 4;
      case "/blog":
        return 5;
      default:
        return 0;
    }
  };

  const [clickTab, setClickTab] = useState(getPathIndex(location.pathname));

  const handleTabChange = (event, newValue) => {
    setClickTab(newValue);
  };

  return (
    <div>
      <AppBar
        sx={{
          background:
            "radial-gradient(66.07% 100% at 50% -45.72%, rgba(220, 255, 91, 0.7) 0%, rgba(28, 36, 39, 0) 100%)",
          boxShadow: "none",
          backgroundSize: "cover",
        }}
        position="static"
      >
        <Toolbar>
          <Link to="/">
            {" "}
            <img src={skewbLogo} width={"150px"} alt="logo" />
          </Link>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <Tabs
              sx={{
                marginLeft: "auto",
                color: "#8c99ab",
                padding: "12px 28px",
                fontSize: "18px",
                fontWeight: "1000",
                lineHeight: "140%",
              }}
              textColor="inherit"
              value={clickTab}
              onChange={handleTabChange}
              indicatorColor="#d6ff41"
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                sx={{
                  borderBottom:
                    location.pathname === "/" ? "2px solid #d6ff41" : "white",
                  color: location.pathname === "/" ? "#d6ff41" : "white",
                }}
              />
              <Tab
                label="About"
                component={Link}
                to="/about"
                sx={{
                  borderBottom:
                    location.pathname === "/about"
                      ? "2px solid #d6ff41"
                      : "white",
                  color: location.pathname === "/about" ? "#d6ff41" : "white",
                }}
              />
              <Tab
                label="Services"
                component={Link}
                to="/service"
                sx={{
                  borderBottom:
                    location.pathname === "/service"
                      ? "2px solid #d6ff41"
                      : "white",
                  color: location.pathname === "/service" ? "#d6ff41" : "white",
                }}
              />
              <Tab
                label="Industries"
                component={Link}
                to="/industries"
                sx={{
                  borderBottom:
                    location.pathname === "/industries"
                      ? "2px solid #d6ff41"
                      : "white",
                  color:
                    location.pathname === "/industries" ? "#d6ff41" : "white",
                }}
              />
              <Tab
                label="Contact"
                component={Link}
                to="/contact"
                sx={{
                  borderBottom:
                    location.pathname === "/contact"
                      ? "2px solid #d6ff41"
                      : "white",
                  color: location.pathname === "/contact" ? "#d6ff41" : "white",
                }}
              />
              <Tab
                label="Blog"
                component={Link}
                to="/blog"
                sx={{
                  borderBottom:
                    location.pathname === "/blog"
                      ? "2px solid #d6ff41"
                      : "white",
                  color: location.pathname === "/blog" ? "#d6ff41" : "white",
                }}
              />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
