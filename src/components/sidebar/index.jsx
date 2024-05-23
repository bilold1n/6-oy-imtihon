import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Header from "../header";
import SvgIcon from "@mui/material/SvgIcon";
import BarChartIcon from "@mui/icons-material/BarChart";

import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

const drawerWidth = 264;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const data = JSON.parse(localStorage.getItem("user")) ?? [];
  const data1 = Array(data);
  console.log(data);
  const navigate = useNavigate();
  function submit() {
    localStorage.setItem("user", JSON.stringify([]));
    navigate("/");
  }
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const drawer = (
    <>
      <div className="sidebar">
        <div className="icon-orab">
          {data1 &&
            data1.map(({ avatar, name }) => {
              console.log(avatar);
              return (
                <div className="user">
                  <img src={avatar} alt="sa" /> <h5>{name}</h5>
                </div>
              );
            })}
          <div className="list">
            <hr className="hr" />
            <NavLink
              className="icon-orabb"
              style={{ textDecoration: "none" }}
              to="/layout"
            >
              {" "}
              <p>
                <HomeIcon className="icon" color="primary" />
                Dashboard
              </p>
            </NavLink>
            <NavLink
              className="icon-orabb"
              style={{ textDecoration: "none" }}
              to="/layout/product"
            >
              <p>
                <BarChartIcon className="icon" color="primary" />
                Products
              </p>
            </NavLink>
            <p>ACCOUNT PAGES</p>
            <NavLink
              className="icon-orabb"
              style={{ textDecoration: "none" }}
              to="/signup"
            >
              {" "}
              <p>
                <DescriptionRoundedIcon className="icon" color="primary" />
                Sig up
              </p>
            </NavLink>
            <NavLink
              className="icon-orabb"
              onClick={submit}
              style={{ textDecoration: "none" }}
            >
              <p>
                <RocketLaunchRoundedIcon className="icon" color="primary" />
                Log out
              </p>
            </NavLink>
          </div>
        </div>

        <Toolbar />
        <Divider />
        <List className="list">
          {/* {["Dashboard", "Products", "ACCOUNT PAGES", "Sig up", "Log out"]} */}
        </List>
        <Divider />
      </div>
    </>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Header />
        {/* <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Path
            </Typography>
          </> */}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
