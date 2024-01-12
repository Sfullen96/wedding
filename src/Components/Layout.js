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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import whiteLogo from "../logo.png";
import blackLogo from "../logo-black.png";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import useIsMobile from "../Hooks/useIsMobile";
import { getHeaderHeight } from "../utils/helpers";
import styalOutside from "../images/styal-outside.jpg";

const drawerWidth = 240;

const pages = [
  { label: "Venue", path: "/venue" },
  { label: "Accommodation", path: "/accommodation" },
];

const Layout = ({ children, header }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isMobile = useIsMobile();
  const headerHeight = header ? getHeaderHeight(isMobile) : "0px";

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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <CssBaseline />
      {header && (
        <>
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
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                  <img src={whiteLogo} alt="Wedding rings" width="50px" />
                </Link>
              </Typography>
              <Box
                alignItems="center"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <Button variant="contained" color="secondary">
                  <HeaderLink to="/rsvp" sx={{ ml: 0 }}>
                    R.S.V.P
                  </HeaderLink>
                </Button>
                {pages.map(({ label, path }) => (
                  <HeaderLink key={label} to={path} hasMargin>
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
        </>
      )}
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        minHeight={`calc(100vh - ${headerHeight})`}
        flexDirection="column"
        sx={{
          backgroundImage: `url(${styalOutside})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: `calc(100vh - ${headerHeight})`,
          position: "relative",
          paddingBottom: 3,
        }}
        zIndex="0"
        mt={headerHeight}
      >
        <Box
          display="flex"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          bgcolor="rgba(0,0,0,0.7)"
          minHeight="100%"
          zIndex="1"
        />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
