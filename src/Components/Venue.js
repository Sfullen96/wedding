import {
  Box,
  CardHeader,
  Tab,
  Tabs as MuiTabs,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Alert,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import queryString from "query-string";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLoadScript } from "@react-google-maps/api";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import PublicTransport from "./PublicTransport";
import South from "./South";
import North from "./North";
import { grey } from "@mui/material/colors";
import Card from "./Card";
import CardContent from "./CardContent";
import PrintButton from "./PrintDirections";
import { useReactToPrint } from "react-to-print";
import PrintDirections from "./PrintDirections";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
  ${({ theme }) => `${theme.breakpoints.up("sm")} {
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

const venueId = "ChIJcVSt6kVNekgRHE3N1a-NwpE";
const stanneylandsId = "ChIJ_0K7iMGve0gRsDirtVYcrwQ";

const defaultQs = {
  q: `place_id:${venueId}`,
};

const Venue = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
    libraries: [],
  });

  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed/v1/place"
  );
  const [searchValue, setSearchValue] = useState("");
  const [mapQueryString, setMapQueryString] = useState(defaultQs);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState();
  const handleAccordionChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [directions, setDirections] = useState();
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState(venueId);
  const [avoidMotorways, setAvoidMotorways] = useState(false);
  const [route, setRoute] = useState();

  if (!isLoaded) {
    return null;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reset = () => {
    setSearchValue("");
    setMapUrl("https://www.google.com/maps/embed/v1/place");
    setMapQueryString({
      q: `place_id:${venueId}`,
    });
  };

  return (
    <>
      <Card
        sx={{ p: 0, bgcolor: grey[200], width: "100%", textAlign: "left" }}
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
        <CardContent sx={{ width: "100%" }}>
          <Alert severity="info" sx={{ mb: 2 }}>
            Please note: the venue is <b>card only</b> and does not accept cash.
          </Alert>
          <Typography sx={{ mb: 2 }}>
            Enter your address or postcode below to see and generate printable
            directions:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 1.5 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="address"
                value={searchValue}
                label="Address or postcode"
                onChange={(e) => {
                  setSearchValue(e.target.value);

                  if (e.target.value === "") {
                    reset();
                  }
                }}
                size="small"
                sx={{ mr: 3 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ mr: 3 }} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Destination
                </InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={destination}
                  label="destination"
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <MenuItem value={venueId}>Styal Lodge</MenuItem>
                  <MenuItem value={stanneylandsId}>Stanneylands hotel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={avoidMotorways}
                    onChange={(e) => setAvoidMotorways(e.target.checked)}
                  />
                }
                label="Avoid motorways?"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mb: 3, textAlign: "right" }}>
              <Button
                sx={{ height: "40px", mr: 1 }}
                size="small"
                variant="contained"
                color="primary"
                onClick={async () => {
                  const opts = {
                    origin: searchValue,
                    destination: { placeId: destination },
                    travelMode: window.google.maps.TravelMode.DRIVING,
                    unitSystem: window.google.maps.UnitSystem.IMPERIAL,
                    provideRouteAlternatives: true,
                    avoidHighways: avoidMotorways,
                  };

                  const service = new window.google.maps.DirectionsService();

                  const res = await service.route(opts);
                  console.log(res);
                  setDirections(res.routes);
                  setRoute(res.routes[0]);

                  setMapUrl("https://www.google.com/maps/embed/v1/directions");
                  setMapQueryString({
                    origin: searchValue,
                    destination: `place_id:${destination}`,
                  });
                }}
                disabled={!searchValue || searchValue === ""}
              >
                Search
              </Button>
              <Button
                sx={{ height: "40px" }}
                size="small"
                variant="outlined"
                color="secondary"
                onClick={reset}
              >
                Clear
              </Button>
            </Grid>
          </Grid>

          {searchValue && directions && (
            <>
              <Button
                variant="outlined"
                color="primary"
                onClick={async () => {
                  handlePrint();
                }}
                sx={{ mb: 2 }}
              >
                Print step-by-step directions
              </Button>

              {directions.length > 1 && (
                <FormControl sx={{ mx: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Route option
                  </InputLabel>
                  <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={route?.summary}
                    label="Route option"
                    onChange={(e) =>
                      setRoute(
                        directions.find((x) => x.summary === e.target.value)
                      )
                    }
                  >
                    {directions.map((opt, index) => (
                      <MenuItem key={opt.summary} value={opt.summary}>
                        Option {index + 1} ({opt.summary})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              <div style={{ display: "none" }}>
                <PrintDirections ref={componentRef}>
                  <Typography variant="body1" sx={{ fontSize: "20px" }}>
                    {route?.legs[0].start_address} -{" "}
                    {route?.legs[0].end_address}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "18px" }}>
                    {route?.legs[0].distance.text} | ~
                    {route?.legs[0].duration.text}
                  </Typography>
                  <ol>
                    {route?.legs[0].steps.map(({ instructions }) => (
                      <li
                        style={{ marginBottom: "8px", fontSize: "18px" }}
                        dangerouslySetInnerHTML={{ __html: instructions }}
                      />
                    ))}
                  </ol>
                </PrintDirections>
              </div>
            </>
          )}
          {loading && (
            <Box
              display="flex"
              width="100%"
              zIndex={2}
              justifyContent="center"
              mt={3}
            >
              <Typography variant="body1" sx={{ color: "#333" }}>
                Map is loading, please wait...
              </Typography>
            </Box>
          )}
          <iframe
            width="100%"
            height="350px"
            style={{
              zIndex: 3,
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "6px",
            }}
            loading="lazy"
            allowFullScreen
            src={`${mapUrl}?${queryString.stringify(
              {
                ...mapQueryString,
                key: process.env.REACT_APP_MAPS_KEY,
              },
              { sort: false }
            )}`}
            title="Styal Lodge"
            onLoad={() => setLoading(false)}
          />
        </CardContent>
      </Card>
      <Card
        sx={{
          p: 0,
          bgcolor: grey[200],
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
              <PrintButton Component={North} />
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
    </>
  );
};

export default Venue;
