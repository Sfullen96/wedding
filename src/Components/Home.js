import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styalOutside from "../images/styal-outside.jpg";
import styled from "@emotion/styled";
import useIsMobile from "../Hooks/useIsMobile";
import { getHeaderHeight } from "../utils/helpers";
import { Link } from "react-router-dom";

const StyledTypography = styled(Typography)`
  color: #fff;
`;

const Home = () => {
  const isMobile = useIsMobile();
  const headerHeight = getHeaderHeight(isMobile);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      pt={5}
      height={`calc(100vh - ${headerHeight})`}
      flexDirection="column"
      sx={{
        backgroundImage: `url(${styalOutside})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: `calc(100vh - ${headerHeight})`,
        position: "relative",
      }}
      zIndex="2"
    >
      <Box
        display="flex"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        bgcolor="rgba(0,0,0,0.7)"
        height={`calc(100vh - ${headerHeight})`}
        zIndex="3"
      />
      <Box
        zIndex="4"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width={isMobile ? "80%" : "40%"}
        textAlign="center"
      >
        <StyledTypography gutterBottom variant="h6">
          The wedding of
        </StyledTypography>
        <StyledTypography gutterBottom variant="h4">
          <strong>Sam Fullen</strong>
        </StyledTypography>
        <StyledTypography gutterBottom variant="h6">
          <i>and</i>
        </StyledTypography>
        <StyledTypography gutterBottom variant="h4">
          <strong>Leanne Gough</strong>
        </StyledTypography>
        <Divider sx={{ backgroundColor: "#3E829A", width: "100%", my: 3 }} />
        <StyledTypography gutterBottom variant="h3" color="white">
          <strong>21 . 08 . 24</strong>
        </StyledTypography>
        <StyledTypography variant="h6" gutterBottom>
          <strong>Styal Lodge</strong>
        </StyledTypography>
        <StyledTypography variant="h6" gutterBottom>
          Station Road, Styal, Wilmslow SK9 4JN
        </StyledTypography>
        {/* <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1GPsEmHfkP4RhIypP_zXbf75W0l0lEp8&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
        ></iframe> */}
        <Divider sx={{ backgroundColor: "#3E829A", width: "100%", my: 3 }} />

        <Button variant="contained" size="large" color="primary" fullWidth>
          <Link to="/rsvp" style={{ color: "#fff", textDecoration: "none" }}>
            R.S.V.P here{" "}
            <ArrowForwardIosIcon fontSize="0.9375rem" sx={{ ml: 1 }} />
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
