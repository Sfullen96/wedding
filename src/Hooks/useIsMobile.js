import { useMediaQuery } from "@mui/material";
import theme from "../theme";

const { useState, useEffect } = require("react");

const useIsMobile = () => {
  const isMob = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMobile, setIsMobile] = useState(isMob);

  useEffect(() => {
    setIsMobile(isMob);
  }, [isMob]);

  return isMobile;
};

export default useIsMobile;
