import { Typography } from "@mui/material";
import React from "react";

const South = () => (
  <>
    <Typography variant="h6">From the South</Typography>
    <ol>
      <li>Take the M6 motorway towards Manchester.</li>
      <li>At junction 19, take the A556 exit towards Manchester Airport.</li>
      <li>
        Continue on the A556 for approximately 5 miles, following signs for
        Manchester Airport (M56).
      </li>
      <li>Merge onto the M56.</li>
      <li>At junction 5 join the A555.</li>{" "}
      <li>
        Continue on the A555 for around 1 mile, then turn right onto Hollin
        Lane.
      </li>
      <li>After 1 mile, turn left onto Station Road</li>
      <li>
        After 500 yards, turn left into Styal Lodge (sign will say Styal Golf
        Club).
      </li>
    </ol>
    <Typography>
      Please ensure you park in the Styal Lodge carpark, not the golf course.
    </Typography>
  </>
);

export default South;
