import React from "react";
import { CardContent as MuiCardContent } from "@mui/material";
import { grey } from "@mui/material/colors";

const CardContent = ({ children, ...props }) => (
  <MuiCardContent sx={{ width: "100%", bgcolor: grey[200] }} {...props}>
    {children}
  </MuiCardContent>
);

export default CardContent;
