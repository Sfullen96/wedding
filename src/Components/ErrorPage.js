import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
    flexDirection="column"
  >
    <Typography variant="h4" sx={{ mb: 3 }}>
      Page not found
    </Typography>
    <Link to="/" style={{ fontSize: "1.625rem" }}>
      Home
    </Link>
  </Box>
);

export default ErrorPage;
