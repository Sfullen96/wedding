import { Typography } from "@mui/material";
import React from "react";

const North = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Typography variant="h6">From the North</Typography>

    <ol>
      <li>Take the M60 motorway towards Stockport.</li>
      <li>Exit at junction 5, for the A5103 (M56) and keep right</li>
      <li>Join Princess Parkway (A5103) and follow signs for the M56</li>
      <li>Join the M56, and follow for approximately 2.5 miles</li>
      <li>At junction 5 join the A555.</li>
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
  </div>
));

export default North;
