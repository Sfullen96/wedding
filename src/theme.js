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
      main: "#9a573e",
      light: "#c48872",
      dark: "#7c402e",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});

export default theme;
