import { Divider, Typography } from "@mui/material";
import React from "react";

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

    <Typography>For Taxis, use Uber or Street Cars (0161 228 7878)</Typography>
  </>
);

export default PublicTransport;
