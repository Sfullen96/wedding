import { Box, Typography } from "@mui/material";
import React from "react";

const PrintDirections = React.forwardRef((props, ref) => {
  return (
    <Box display="flex" flexDirection="column" m={3} ref={ref}>
      {props.children}
      <Typography my={1} variant="body2">
        Please park in the signposted Styal Lodge carpark, not the golf
        course/driving range.
      </Typography>
    </Box>
  );
});

export default PrintDirections;
