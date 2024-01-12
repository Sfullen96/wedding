import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useIsMobile from "../Hooks/useIsMobile";
import { Link } from "react-router-dom";

const Home = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  return (
    <Box
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={isMobile ? "90%" : "50%"}
      textAlign="center"
      pt={5}
    >
      <Card sx={{ p: isMobile ? 0 : 5, bgcolor: "#e2e2e2" }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: theme.palette.secondary.extraDark }}
            variant={isMobile ? "body1" : "h6"}
          >
            The wedding of
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            color="primary"
            sx={{ fontFamily: "Petit Formal Script" }}
          >
            Sam Fullen
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{ fontFamily: "Petit Formal Script" }}
            color="primary"
          >
            &amp;
          </Typography>
          <Typography
            gutterBottom
            variant={isMobile ? "h4" : "h3"}
            color="primary"
            sx={{ fontFamily: "Petit Formal Script" }}
          >
            Leanne Gough
          </Typography>
          <Divider
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "100%",
              my: 3,
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
            color="primary"
            sx={{ fontWeight: 400, color: theme.palette.secondary.extraDark }}
          >
            Wednesday 21st August 2024
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            gutterBottom
            sx={{ color: theme.palette.secondary.extraDark }}
          >
            Styal Lodge
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ color: theme.palette.secondary.extraDark }}
          >
            Station Road, Styal, Wilmslow SK9 4JN
          </Typography>
          {/* <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1GPsEmHfkP4RhIypP_zXbf75W0l0lEp8&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
        ></iframe> */}
          <Divider
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "100%",
              my: 3,
            }}
          />

          <Button variant="contained" size="large" color="primary" fullWidth>
            <Link
              to="/rsvp"
              style={{
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                textAlign: "center",
              }}
            >
              R.S.V.P here
              <ArrowForwardIosIcon fontSize="0.9375rem" sx={{ ml: 1 }} />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
