import React, { useState, useEffect } from "react";
import {
  // AppBar,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link, useLocation } from "react-router-dom";
import skewbLogo from "../assets/skewblogo.svg";

function Navbar() {
  const [clickTab, setClickTab] = useState(0);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setClickTab(0);
    } else if (location.pathname === "/about") {
      setClickTab(1);
    } else if (location.pathname === "/service") {
      setClickTab(2);
    } else if (location.pathname === "/industries") {
      setClickTab(3);
    } else if (location.pathname === "/contact") {
      setClickTab(4);
    } else if (location.pathname === "/blog") {
      setClickTab(5);
    }
  }, [location.pathname]);

  return (
    <div>
      <Box sx={{ backgroundColor: "black" }}>
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
              indicatorColor="#d6ff41"
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                sx={{
                  "&.Mui-selected": {
                    borderBottom: "2px solid #d6ff41",
                    color: "#d6ff41",
                  },
                }}
              />
              <Tab
                label="About"
                component={Link}
                to="/about"
                sx={{
                  "&.Mui-selected": {
                    borderBottom: "2px solid #d6ff41",
                    color: "#d6ff41",
                  },
                }}
              />
              <Tab
                label="Service"
                component={Link}
                to="/service"
                sx={{
                  "&.Mui-selected": {
                    borderBottom: "2px solid #d6ff41",
                    color: "#d6ff41",
                  },
                }}
              />
              <Tab
                label="Industries"
                component={Link}
                to="/industries"
                sx={{
                  "&.Mui-selected": {
                    borderBottom: "2px solid #d6ff41",
                    color: "#d6ff41",
                  },
                }}
              />
              <Tab
                label="Contact"
                component={Link}
                to="/contact"
                sx={{
                  "&.Mui-selected": {
                    borderBottom: "2px solid #d6ff41",
                    color: "#d6ff41",
                  },
                }}
              />
              <Tab
                label="Blog"
                component={Link}
                to="/blog"
                sx={{
                  "&.Mui-selected": {
                    borderBottom: "2px solid #d6ff41",
                    color: "#d6ff41",
                  },
                }}
              />
            </Tabs>
          )}
        </Toolbar>
      </Box>
    </div>
  );
}

export default Navbar;
