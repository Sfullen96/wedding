import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import { grey } from "@mui/material/colors";

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
        sx={{ p: 0, bgcolor: grey[200], width: "100%", textAlign: "left" }}
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
        {/* <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1GPsEmHfkP4RhIypP_zXbf75W0l0lEp8&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
        ></iframe> */}
        <CardContent>
          <Typography>
            There is no accommodation on-site at Styal Lodge. However, it is
            situated close to Manchester Airport and so has many hotels in close
            proximity.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Accommodation;
