import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Link } from "react-router-dom";

function DrawerComp() {
  const [openDrawer, setDrawer] = useState(false);
  const theme = useTheme();

  const handleTabClick = () => {
    setDrawer(false);
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1c2427", // Change this to your desired background color
            textAlign: "left",
          },
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Tab
                  onClick={handleTabClick}
                  label="Home"
                  component={Link}
                  to="/"
                  sx={{
                    "&.Mui-selected": { borderBottom: "2px solid #d6ff41" },
                    color: "#d6ff41",
                    textAlign: "left",
                  }}
                />
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Tab
                  onClick={handleTabClick}
                  label="About"
                  component={Link}
                  to="/about"
                  sx={{
                    "&.Mui-selected": { borderBottom: "2px solid #d6ff41" },
                    color: "#d6ff41",
                    textAlign: "left",
                    
                  }}
                />
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Tab
                  onClick={handleTabClick}
                  label="Services"
                  component={Link}
                  to="/service"
                  sx={{
                    "&.Mui-selected": { borderBottom: "2px solid #d6ff41" },
                    color: "#d6ff41",
                    textAlign: "left",
                  }}
                />
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Tab
                  onClick={handleTabClick}
                  label="Industries"
                  component={Link}
                  to="/industries"
                  sx={{
                    "&.Mui-selected": { borderBottom: "2px solid #d6ff41" },
                    color: "#d6ff41",
                    textAlign: "left",
                  }}
                />
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Tab
                  onClick={handleTabClick}
                  label="Contact"
                  component={Link}
                  to="/contact"
                  sx={{
                    "&.Mui-selected": { borderBottom: "2px solid #d6ff41" },
                    color: "#d6ff41",
                    textAlign: "left",
                  }}
                />
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <Tab
                  onClick={handleTabClick}
                  label="Blog"
                  component={Link}
                  to="/blog"
                  sx={{
                    "&.Mui-selected": { borderBottom: "2px solid #d6ff41" },
                    color: "#d6ff41",
                    textAlign: "left",
                  }}
                />
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setDrawer(!openDrawer)}
      >
        <MenuSharpIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}

export default DrawerComp;
