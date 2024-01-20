import React from "react";
import { Box, Card as MuiCard } from "@mui/material";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

import flowers1 from "../images/flowers1.png";
import flower3 from "../images/flower3.png";

const FlowersOne = styled("img")`
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 10px;
  transform: rotate(180deg);
  z-index: 1;
  ${({ theme }) => `${theme.breakpoints.down("sm")} {
    height: 40%;
  }`}
  ${({ theme }) => `${theme.breakpoints.up("sm")} {
    height: 60%;
  }`}
`;
const FlowersTwo = styled("img")`
  opacity: 0.5;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;

  ${({ theme }) => `${theme.breakpoints.down("sm")} {
    height: 40%;
  }`}
  ${({ theme }) => `${theme.breakpoints.up("sm")} {
    height: 60%;
  }`}
`;

const StyledCard = styled(MuiCard)`
  background-color: ${grey[200]};
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => `${theme.breakpoints.down("sm")} {
    padding: 0;
  }`}
`;

const Container = styled(Box)`
  z-index: 4;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${({ theme }) => `${theme.breakpoints.between("xs", "sm")} {
    width: 95%;
  }`}
  ${({ theme }) => `${theme.breakpoints.between("sm", "md")} {
    width: 85%;
  }`}
  ${({ theme }) => `${theme.breakpoints.between("md", "lg")} {
    width: 75%;
  }`}
  ${({ theme }) => `${theme.breakpoints.between("lg", "xl")} {
    width: 60%;
  }`}
  ${({ theme }) => `${theme.breakpoints.up("xl")} {
    width: 50%;
  }`}
`;

const Card = ({ children, align = "start", showFlowers = false, ...props }) => (
  <Container>
    <StyledCard {...props}>
      {showFlowers && (
        <>
          <FlowersOne src={flower3} alt="background flowers" />
          <FlowersTwo src={flowers1} alt="background flowers alternative" />
        </>
      )}

      <div
        style={{
          zIndex: 2,
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: align,
        }}
      >
        {children}
      </div>
    </StyledCard>
  </Container>
);

export default Card;
