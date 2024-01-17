import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AccommodationItem = ({ name, website }) => (
  <>
    <Typography variant="h5" gutterBottom>
      {name}
    </Typography>
    <Typography variant="body1" gutterBottom>
      <Link to="https://www.stanneylands.co.uk/" target="_blank">
        https://www.stanneylands.co.uk/
      </Link>
    </Typography>
  </>
);

export default AccommodationItem;
