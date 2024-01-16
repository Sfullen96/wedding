import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";

const Accommodation = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={isMobile ? "90%" : "80%"}
      textAlign="center"
      pt={5}
    >
      <Card
        sx={{ p: 0, bgcolor: "#e2e2e2", width: "100%", textAlign: "left" }}
        fullWidth
      >
        <CardHeader
          title={
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontFamily: "Petit Formal Script", fontWeight: 600 }}
            >
              Accommodation
            </Typography>
          }
        />
        <CardContent></CardContent>
      </Card>
    </Box>
  );
};

export default Accommodation;
