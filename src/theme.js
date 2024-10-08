import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3E829A",
      light: "#75a9be",
      dark: "#225e72",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9FC9D8",
      light: "#d8e9ef",
      dark: "#5ca6c0",
      extraDark: "#005d95",
      contrastText: "#fff",
    },
    grey: {
      main: "#545454",
    },
    silver: {
      main: "#A6A6A6",
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    fontWeightRegular: 300,
  },
});

export default theme;
