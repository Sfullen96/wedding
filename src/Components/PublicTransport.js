import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PublicTransport = () => (
  <>
    <Typography variant="h6">Public transport</Typography>
    <ol>
      <li>Take a train to Wilmslow station.</li>
      <li>From Wilmslow you can take a train to Styal station.</li>
      <li>From Styal station it is around a 15-20 minute walk.</li>
    </ol>
    <Divider />
    <ol>
      <li>Alternatively, you can get the Metrolink to Manchester Airport</li>
      <li>Take a taxi to Styal Lodge.</li>
    </ol>

    <Typography>
      For Taxis, the venue recommend{" "}
      <Link to="https://www.lynxtaxis.co.uk/" target="_blank">
        Lynx Taxis
      </Link>{" "}
      (
      <Link target="_blank" to="tel:0161 480 5000">
        0161 480 5000
      </Link>
      )
    </Typography>
  </>
);

export default PublicTransport;
