import React from "react";
import {
  Button,
  Typography,
  useTheme,
  CardContent as MuiCardContent,
} from "@mui/material";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useIsMobile from "../Hooks/useIsMobile";
import { Link } from "react-router-dom";

import Card from "./Card";

const CardContent = styled(MuiCardContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => `${theme.breakpoints.between("xs", "md")} {
    width: 100%;
  }`}
  ${({ theme }) => `${theme.breakpoints.between("md", "xl")} {
    width: 70%;
  }`}
  ${({ theme }) => `${theme.breakpoints.up("xl")} {
    width: 62%;
  }`}
`;

const Home = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  return (
    <Card align="center">
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: theme.palette.grey.main, fontWeight: 600 }}
          variant={isMobile ? "body1" : "h6"}
        >
          The wedding of
        </Typography>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            fontFamily: "Petit Formal Script",
            color: theme.palette.primary.main,
            fontWeight: 600,
          }}
        >
          Sam Fullen
        </Typography>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontFamily: "Petit Formal Script",
            color: theme.palette.silver.main,
            fontWeight: 600,
          }}
        >
          &amp;
        </Typography>
        <Typography
          gutterBottom
          variant={isMobile ? "h4" : "h3"}
          color="primary"
          sx={{
            fontFamily: "Petit Formal Script",
            color: theme.palette.primary.main,
            fontWeight: 600,
          }}
        >
          Leanne Gough
        </Typography>

        <Typography
          variant="h2"
          sx={{ textAlign: "center", mt: 1, fontWeight: 400 }}
          gutterBottom
        >
          <span style={{ color: theme.palette.grey.main }}>21</span>{" "}
          <span style={{ color: theme.palette.silver.main }}>08</span>{" "}
          <span style={{ color: theme.palette.grey.main }}>24</span>
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h4"}
          sx={{
            color: theme.palette.grey.main,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          Styal Lodge
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ color: theme.palette.grey.main, textAlign: "center" }}
        >
          Station Road, Styal, Wilmslow SK9 4JN
        </Typography>

        {/* <Typography
            gutterBottom
            variant="h5"
            color="primary"
            sx={{ fontWeight: 400, color: theme.palette.grey.main, mt: 2 }}
          >
            Wednesday 21st August 2024
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            gutterBottom
            sx={{ color: theme.palette.grey.main }}
          >
            Styal Lodge
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ color: theme.palette.grey.main }}
          >
            Station Road, Styal, Wilmslow SK9 4JN
          </Typography> */}

        <Button
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
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
  );
};

export default Home;
