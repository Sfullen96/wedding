import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const FourOhFour = () => (
  <Layout>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      flexDirection="column"
      width="80%"
      minWidth="80%"
      zIndex="10"
    >
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Page not found.
          </Typography>
          <Link to="/">Home</Link>
        </CardContent>
      </Card>
    </Box>
  </Layout>
);

export default FourOhFour;
