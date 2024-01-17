import React, { useState } from 'react'
import { Drawer, IconButton, useTheme, useMediaQuery, List, ListItemButton, ListItemIcon, ListItemText, Tab } from '@mui/material'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';



function DrawerComp() {
    const [openDrawer, setDrawer] = useState(false)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setDrawer(false)} >
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Tab label="Home" component={Link} to="/" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41' } }} />
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Tab label="About" component={Link} to="/about" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41' } }} />
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Tab label="Services" component={Link} to="/service" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41' } }} />
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Tab label="Industries" component={Link} to="/industries" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41' } }} />
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Tab label="Contact" component={Link} to="/contact" sx={{ '&.Mui-selected': { borderBottom: '2px solid #d6ff41' } }} />
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: "auto" }} onClick={() => setDrawer(!openDrawer)} >

                <MenuSharpIcon sx={{ color: "white" }} />
            </IconButton>
        </>
    )
}

export default DrawerComp