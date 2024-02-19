import styled from "@emotion/styled";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink, {
  shouldForwardProp: (prop) => prop !== "$isMobile" && prop !== "$hasMargin",
})`
  text-decoration: none;
  color: ${({ $isMobile }) => ($isMobile ? "#333" : "#fff")};
  margin-left: ${({ $isMobile, $hasMargin }) =>
    !$isMobile && $hasMargin && "1rem"};
`;

const HeaderLink = ({ isMobile, hasMargin, ...props }) => (
  <Link {...props} $isMobile={isMobile} $hasMargin={hasMargin} />
);

export default HeaderLink;
