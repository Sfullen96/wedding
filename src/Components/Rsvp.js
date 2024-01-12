import React from "react";
import useIsMobile from "../Hooks/useIsMobile";
import { getHeaderHeight } from "../utils/helpers";
import { Typography } from "@mui/material";

const Rsvp = () => {
  const isMobile = useIsMobile();
  const headerHeight = getHeaderHeight(isMobile);

  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeTsCRYgx_r3cyuH-bv4_vCDabWc-qYo383winNUxr0BleEzQ/viewform?embedded=true"
      width="100%"
      style={{
        minHeight: `calc(100vh - ${headerHeight})`,
        paddingTop: "25px",
        zIndex: 2,
        border: "none",
      }}
      title="rsvp-form"
    >
      <Typography sx={{ color: "#fff" }}>Loading…</Typography>
    </iframe>
  );
};

export default Rsvp;
