import React from "react";
import useIsMobile from "../Hooks/useIsMobile";
import { getHeaderHeight } from "../utils/helpers";

const Rsvp = () => {
  const isMobile = useIsMobile();
  const headerHeight = getHeaderHeight(isMobile);

  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdYNyn6TdJLJuAfnTbHHXtz9us070ntEJYD94Spl-fQvLI7Ug/viewform?embedded=true"
      width="100%"
      style={{ minHeight: `calc(100vh - ${headerHeight})` }}
      title="rsvp-form"
    >
      Loading…
    </iframe>
  );
};

export default Rsvp;
