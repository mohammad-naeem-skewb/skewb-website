import React, { useState } from 'react';
import { AppBar, Drawer, Tab, Tabs, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
import skewbLogo from "../assets/skewblogo.svg"

function Navbar() {
  const [clickTab, setClickTab] = useState(0);

  const clickHandle = (event, newValue) => {


    setClickTab(newValue);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>

      <AppBar sx={{ backgroundColor: "black" }} >
        <Toolbar>

          <Link to="/" > <img src={skewbLogo} width={"150px"} /></Link>

          {
            isMatch ? <>

              <DrawerComp />
            </> : <Tabs sx={{ marginLeft: "auto", color: "#8c99ab", padding: "12px 28px", fontSize: "18px", fontWeight: "1000", lineHeight: "140%" }}
              textColor='inherit'

              value={clickTab}
              indicatorColor='#d6ff41'
              onChange={clickHandle}
            >

              <Tab label="Home" component={Link} to="/" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41', color: '#d6ff41' } }} />
              <Tab label="About" component={Link} to="/about" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41', color: '#d6ff41' } }} />
              <Tab label="Service" component={Link} to="/service" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41', color: '#d6ff41' } }} />
              <Tab label="Industries" component={Link} to="/industries" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41', color: '#d6ff41' } }} />
              <Tab label="Contact" component={Link} to="/contact" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41', color: '#d6ff41' } }} />
              <Tab label="Blog" component={Link} to="/blog" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41', color: '#d6ff41' } }} />

            </Tabs>
          }




        </Toolbar>

      </AppBar>
    </div>
  );
}

export default Navbar;
