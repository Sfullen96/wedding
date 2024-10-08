import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const ErrorPage = () => (
  <Layout>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      flexDirection="column"
      width="80%"
      zIndex={10}
    >
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Something went wrong, please try again later. If the issue perists
            please contact{" "}
            <Link
              to="mailto:samandleanne24@gmail.com"
              target="_blank"
              rel="noreferer"
            >
              samandleanne24@gmail.com
            </Link>
            .
          </Typography>
          <Link to="/" style={{ fontSize: "1.625rem" }}>
            Home
          </Link>
        </CardContent>
      </Card>
    </Box>
  </Layout>
);

export default ErrorPage;
