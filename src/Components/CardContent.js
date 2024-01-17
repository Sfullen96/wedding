import React from "react";
import { CardContent as MuiCardContent } from "@mui/material";

const CardContent = ({ children, ...props }) => (
  <MuiCardContent sx={{ width: "100%" }} {...props}>
    {children}
  </MuiCardContent>
);

export default CardContent;
