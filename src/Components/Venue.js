import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

import React from "react";
import useIsMobile from "../Hooks/useIsMobile";

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

const Venue = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={isMobile ? "90%" : "80%"}
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
        />
        <CardContent>
          <iframe
            width="100%"
            height="450"
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
              aria-label="basic tabs example"
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
          <CustomTabPanel value={value} index={0}>
            <Typography variant="h6">From the North</Typography>

            <ol>
              <li>Take the M60 motorway towards Stockport.</li>
              <li>At junction 3, take the A34 exit towards Cheadle.</li>
              <li>Continue on the A34 for approximately 4 miles.</li>
              <li>Turn left onto Finney Lane.</li>
              <li>After approximately 1 mile, turn right onto Styal Road.</li>
              <li>
                After approximately 1.5 miles, turn left onto Station Road.
              </li>
              <li>Styal Lodge will be on your left.</li>
            </ol>
            <Typography>
              Please ensure you park in the Styal Lodge carpark, not the golf
              course.
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Typography variant="h6">From the South</Typography>
            <ol>
              <li>Take the M6 motorway towards Manchester.</li>
              <li>
                At junction 19, take the A556 exit towards Manchester Airport.
              </li>
              <li>Continue on the A556 for approximately 5 miles.</li>
              <li>
                At the roundabout, take the 2nd exit onto the M56 ramp to
                Chester.
              </li>
              <li>Merge onto the M56.</li>
              <li>At junction 6, take the A538 exit towards Wilmslow.</li>
              <li>Continue on the A538 for approximately 3 miles.</li>
              <li>Turn right onto Station Road.</li>
              <li>Styal Lodge will be on your right.</li>
            </ol>
            <Typography>
              Please ensure you park in the Styal Lodge carpark, not the golf
              course.
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Typography variant="h6">Public transport</Typography>
            <ol>
              <li>Take a train to Wilmslow station.</li>
              <li>From Wilmslow you can take a train to Styal station.</li>
              <li>From Styal station it is around a 15-20 minute walk.</li>
            </ol>
            <Divider />
            <ol>
              <li>
                Alternatively, you can get the Metrolink to Manchester Airport
              </li>
              <li>Take a taxi to Styal Lodge.</li>
            </ol>

            <Typography>
              For Taxis, use Uber or Street Cars (0161 228 7878)
            </Typography>
          </CustomTabPanel>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Venue;
