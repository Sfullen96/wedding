import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import useIsMobile from "../Hooks/useIsMobile";
import { Link } from "react-router-dom";
import AddToCalendar from "./AddToCalendar";

const StyledTypography = styled(Typography)`
  color: #fff;
`;

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={isMobile ? "80%" : "40%"}
      textAlign="center"
      pt={5}
    >
      <StyledTypography gutterBottom variant={isMobile ? "body1" : "h6"}>
        The wedding of
      </StyledTypography>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        color="secondary"
        sx={{ fontFamily: "Petit Formal Script" }}
      >
        Sam Fullen
      </Typography>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{ fontFamily: "Petit Formal Script" }}
        color="secondary"
      >
        &amp;
      </Typography>
      <Typography
        gutterBottom
        variant={isMobile ? "h4" : "h3"}
        color="secondary"
        sx={{ fontFamily: "Petit Formal Script" }}
      >
        Leanne Gough
      </Typography>
      <Divider sx={{ backgroundColor: "#3E829A", width: "100%", my: 3 }} />
      <StyledTypography
        gutterBottom
        variant="h5"
        color="white"
        sx={{ fontWeight: 400 }}
      >
        Wednesday 21st August 2024
      </StyledTypography>
      <StyledTypography
        variant={isMobile ? "body1" : "h6"}
        sx={{ fontWeight: 300 }}
        gutterBottom
      >
        Styal Lodge
      </StyledTypography>
      <StyledTypography
        variant={isMobile ? "body1" : "h6"}
        sx={{ fontWeight: 300 }}
      >
        Station Road, Styal, Wilmslow SK9 4JN
      </StyledTypography>
      {/* <AddToCalendar /> */}
      {/* <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1GPsEmHfkP4RhIypP_zXbf75W0l0lEp8&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
        ></iframe> */}
      <Divider sx={{ backgroundColor: "#3E829A", width: "100%", my: 3 }} />

      <Button variant="contained" size="large" color="primary" fullWidth>
        <Link
          to="/rsvp"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          R.S.V.P here{" "}
          <ArrowForwardIosIcon fontSize="0.9375rem" sx={{ ml: 1 }} />
        </Link>
      </Button>
    </Box>
  );
};

export default Home;
