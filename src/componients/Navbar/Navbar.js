


import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Logo from '../../asserts/images/logo.png'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@mui/material";

const navItems = [
    { label: "Player Performance", to: "/" },
    { label: "Team's Performance", to: "/team" },
    { label: "Upcoming Matches", to: "/match" },
    { label: "Team Setup", to: "/setup" },
    { label: "Detailed Scorecard", to: "/detail" },
  ];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "white",
        width: "50vw",
      }}
    >
      <Typography>
       
        <img src={Logo} style={{ height: "100px", width: "150px" }}  />
      </Typography>

      <List>
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} style={{ textDecoration: "none" }}>
            <ListItem>
                <ListItemIcon>
      {index % 2 === 0 ? <Diversity3Icon color="	#245998"/> : <SportsVolleyballIcon color=" 	#245998"/> }
              <ListItemText
                sx={{
                    paddingLeft:'15px',
               color:'white',
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "25px",

                  "&:hover": {
                    backgroundColor: "#2192FF ",
                  },
                }}
                primary={item.label}
              />
                </ListItemIcon>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            backgroundColor: "		#a5acaf ",
            fontFamily: "monospace",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <img src={Logo} height={"100px"} width={"150px"} />

            <Tabs
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
                margin: "auto",
              }}
            >
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/"
                label="Player Performance"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/team"
                label="Team's Performance "
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/match"
                label="Upcoming Matches "
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/setup"
                label="Team Setup"
              />

              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/detail"
                label="Detailed Scorecard"
              />
           
            </Tabs>

            {/* <Box sx={{ display: { xs: "none", sm: "block" }, marginX: "auto" }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    padding: "10px",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "bold",
                    
                  
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box> */}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                minHeight: "100vh",
                height: "auto",
                background: "	#4dff00",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
