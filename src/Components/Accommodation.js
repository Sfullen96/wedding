import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardHeader,
  Typography,
} from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import Card from "./Card";
import CardContent from "./CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Card sx={{ p: 0, width: "100%", textAlign: "left" }} fullWidth>
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

        <CardContent>
          <Typography gutterBottom>
            There is no accommodation on-site at Styal Lodge. However, it is
            situated close to Manchester Airport and so has many hotels in close
            proximity.
          </Typography>
          <Typography gutterBottom>
            The map below shows recommended accommodation in the area, click on
            a pin to see more information. Alternatively you can scroll down to
            see a list.
          </Typography>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1GPsEmHfkP4RhIypP_zXbf75W0l0lEp8&ehbc=2E312F&noprof=1"
            width="100%"
            height="350px"
            style={{ border: 0, zIndex: 3 }}
            loading="lazy"
            allowfullscreen
            title="Styal Lodge accommodation"
          />
        </CardContent>
      </Card>
      <Card sx={{ p: 0, width: "100%", textAlign: "left", mt: 3 }} fullWidth>
        <CardContent>
          {/* {accommodation.map} */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              From the North
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              From the South
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Public Transport
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Accommodation;
