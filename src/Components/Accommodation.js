import React, { useState } from "react";
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
import { accommodation } from "../utils/helpers";
import { Link } from "react-router-dom";

const Accommodation = () => {
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);

  return (
    <Box
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={isMobile ? "100%" : "80%"}
      textAlign="center"
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
          {loading && (
            <Box
              display="flex"
              width="100%"
              zIndex={2}
              justifyContent="center"
              alignItems={isMobile ? "start" : "center"}
              mt={3}
            >
              <Typography variant="body1" sx={{ color: "#333" }}>
                Map is loading, please wait...
              </Typography>
            </Box>
          )}
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1GPsEmHfkP4RhIypP_zXbf75W0l0lEp8&ehbc=2E312F&noprof=1"
            width="100%"
            height="350px"
            style={{
              zIndex: 3,
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "6px",
            }}
            loading="lazy"
            allowFullScreen
            title="Styal Lodge accommodation"
            onLoad={() => setLoading(false)}
          />
        </CardContent>
      </Card>
      <Card sx={{ p: 0, width: "100%", textAlign: "left", mt: 3 }} fullWidth>
        <CardContent>
          {accommodation.map(
            (
              {
                name,
                website,
                phone,
                distance,
                description,
                rates,
                additionalInfo,
              },
              index
            ) => (
              <Accordion key={name}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" color="primary">
                      {name}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      {distance} from Styal Lodge
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Link to={website} target="_blank">
                    {website}
                  </Link>
                  <Link to={`tel:${phone}`} target="_blank">
                    {phone}
                  </Link>
                  <Typography sx={{ my: 3 }} variant="body1">
                    {description}
                  </Typography>
                  {rates.map(({ label, price }) => (
                    <Typography
                      gutterBottom
                      variant="body1"
                      key={`${label}-${price}`}
                    >
                      <strong>{label}</strong>: {price}
                    </Typography>
                  ))}

                  <Typography variant="body1" sx={{ mt: 3 }}>
                    Additional info:
                  </Typography>
                  <ul style={{ marginTop: 0 }}>
                    {additionalInfo.map((info) => (
                      <li key={info}>{info}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Accommodation;
