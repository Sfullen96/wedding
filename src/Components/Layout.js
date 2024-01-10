import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import whiteLogo from "../logo.png";
import blackLogo from "../logo-black.png";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import useIsMobile from "../Hooks/useIsMobile";
import { getHeaderHeight } from "../utils/helpers";

const drawerWidth = 240;

const pages = [
  { label: "Venue", path: "/venue" },
  { label: "Accommodation", path: "/accommodation" },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isMobile = useIsMobile();
  const headerHeight = getHeaderHeight(isMobile);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        py={2}
        justifyContent="center"
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={blackLogo} alt="Wedding rings" width="50px" />
        </Link>
      </Box>

      <Divider />
      <List>
        {pages.map(({ path, label }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <HeaderLink isMobile to={path}>
                  {label}
                </HeaderLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "100%", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={whiteLogo} alt="Wedding rings" width="50px" />
            </Link>
          </Typography>
          <Box display="flex" sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map(({ label, path }) => (
              <HeaderLink key={label} to={path}>
                {label}
              </HeaderLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: "100%", mt: headerHeight }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
