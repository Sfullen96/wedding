import styled from "@emotion/styled";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ $isMobile }) => ($isMobile ? "#333" : "#fff")};
  margin-left: ${({ $isMobile }) => !$isMobile && "1rem"};
`;

const HeaderLink = ({ isMobile, ...props }) => (
  <Link {...props} $isMobile={isMobile} />
);

export default HeaderLink;
