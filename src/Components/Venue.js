import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Tab,
  Tabs as MuiTabs,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import PublicTransport from "./PublicTransport";
import South from "./South";
import North from "./North";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Container = styled(Box)`
  ${({ theme }) => `${theme.breakpoints.between("xs", "md")} {
    width: 95%;
  }`}
  ${({ theme }) => `${theme.breakpoints.between("md", "lg")} {
    width: 70%;
  }`}
  ${({ theme }) => `${theme.breakpoints.up("xl")} {
    width: 50%;
  }`}
`;

const Tabs = styled(MuiTabs)`
  ${({ theme }) => `${theme.breakpoints.between("xs", "sm")} {
  display: none;
}`}
  ${({ theme }) => `${theme.breakpoints.between("sm", "xl")} {
  display: flex;
}`}
`;

const AccordionContainer = styled(Box)`
  width: 100%;
  flex-direction: column;
  ${({ theme }) => `${theme.breakpoints.between("xs", "sm")} {
  display: flex;
}`}
  ${({ theme }) => `${theme.breakpoints.between("sm", "xl")} {
  display: none;
}`}
`;

const TabsContainer = styled(Box)`
  ${({ theme }) => `${theme.breakpoints.between("xs", "sm")} {
  display: none;
}`}
  ${({ theme }) => `${theme.breakpoints.between("sm", "xl")} {
  display: flex;
}`}
`;

const Venue = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState("panel1");
  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      // width={isMobile ? "90%" : "65%"}
      textAlign="center"
      pt={5}
    >
      <Card
        sx={{ p: 0, bgcolor: "#e2e2e2", width: "100%", textAlign: "left" }}
        fullWidth
      >
        <CardHeader
          title={
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontFamily: "Petit Formal Script", fontWeight: 600 }}
            >
              Styal Lodge
            </Typography>
          }
          subheader={
            <Link to="https://styallodge.co.uk" target="_blank">
              styallodge.co.uk
            </Link>
          }
        />
        <CardContent>
          <iframe
            width="100%"
            height="250px"
            style={{ border: 0, zIndex: 3 }}
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=Styal%20Lodge%20Weddings%2C%20Station%20Road%2C%20Styal%2C%20Wilmslow%2C%20UK&key=AIzaSyB9321fOzXWmr1N79_LgegqU9p49knNVq4"
            title="Styal Lodge"
          />
        </CardContent>
      </Card>
      <Card
        sx={{
          p: 0,
          bgcolor: "#e2e2e2",
          width: "100%",
          mt: 4,
          textAlign: "left",
        }}
        fullWidth
      >
        <CardHeader
          title={
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontFamily: "Petit Formal Script", fontWeight: 600 }}
            >
              Getting here
            </Typography>
          }
        />
        <CardContent>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="directions tabs"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab
                sx={{ "&:hover": { background: theme.palette.secondary.main } }}
                label={
                  <Box display="flex" alignItems="center">
                    From the North <SouthIcon sx={{ ml: 1 }} />
                  </Box>
                }
                {...a11yProps(0)}
              />
              <Tab
                sx={{ "&:hover": { background: theme.palette.secondary.main } }}
                label={
                  <Box display="flex" alignItems="center">
                    From the South <NorthIcon sx={{ ml: 1 }} />
                  </Box>
                }
                {...a11yProps(1)}
              />
              <Tab
                sx={{ "&:hover": { background: theme.palette.secondary.main } }}
                label={
                  <Box display="flex" alignItems="center">
                    Public Transport <DirectionsTransitIcon sx={{ ml: 1 }} />
                  </Box>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <AccordionContainer>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleAccordionChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                From the North
              </AccordionSummary>
              <AccordionDetails>
                <North />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleAccordionChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                From the South
              </AccordionSummary>
              <AccordionDetails>
                <South />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleAccordionChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Public Transport
              </AccordionSummary>
              <AccordionDetails>
                <PublicTransport />
              </AccordionDetails>
            </Accordion>
          </AccordionContainer>
          <TabsContainer>
            <CustomTabPanel value={value} index={0}>
              <North />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <South />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <PublicTransport />
            </CustomTabPanel>
          </TabsContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Venue;
