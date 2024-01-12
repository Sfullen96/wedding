import React, { useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Rsvp = () => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeTsCRYgx_r3cyuH-bv4_vCDabWc-qYo383winNUxr0BleEzQ/viewform?embedded=true"
        width="100%"
        style={{
          minHeight: "100vh",
          paddingTop: "25px",
          zIndex: 2,
          border: "none",
        }}
        title="rsvp-form"
      >
        <Typography sx={{ color: "#fff" }}>Loading…</Typography>
      </iframe>
      <Card
        sx={{
          zIndex: 2,
          width: isMobile ? "95%" : "70%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <CardHeader
          sx={{ p: 1 }}
          title={
            <Button
              fullWidth
              sx={{
                padding: 0,
                margin: 0,
                color: "#333",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setExpanded(!expanded)}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Having issues with the form?{" "}
                {!expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Typography>
            </Button>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              Having issues with the form? Email{" "}
              <Link
                to="mailto:samandleanne24@gmail.com"
                target="_blank"
                rel="noreferer"
              >
                samandleanne24@gmail.com
              </Link>{" "}
              instead. Please include names of all attendees as well as dietary
              requirements.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Rsvp;
