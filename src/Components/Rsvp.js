import React, { useState } from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFormik } from "formik";

import useIsMobile from "../Hooks/useIsMobile";

const Rsvp = () => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);

  const schema = Yup.object().shape({
    attending: Yup.string().required("This field is required"),
    // lastName: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    // email: Yup.string().email("Invalid email").required("Required"),
    numberOfAttendees: Yup.number()
      .typeError("Must be a number")
      .integer("Must be a whole number")
      .min(1, "Must be a minimum of 1")
      .max(10, "The maximum is 10"),
  });

  const form = useFormik({
    validationSchema: schema,
    initialValues: {
      attending: "",
      names: "",
      dietaryRequirements: "",
      numberOfAttendees: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("HERER");
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    handleChange,
    handleBlur,
  } = form;
  console.log("🚀 ~ Rsvp ~ form:", form);

  return (
    <>
      <Box
        zIndex="4"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width={isMobile ? "100%" : "80%"}
        textAlign="center"
      >
        <Card sx={{ p: 0, width: "100%", textAlign: "left" }} fullWidth>
          <CardHeader
            title={
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontFamily: "Petit Formal Script", fontWeight: 600 }}
              >
                R.S.V.P
              </Typography>
            }
          />

          <CardContent>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <FormControl
                required
                error={touched.attending && errors.attending}
              >
                <FormLabel id="attending-radio">
                  Will you be able to attend?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="attending-radio"
                  value={values.attending}
                  name="attending"
                  onChange={(e) => {
                    setFieldValue("attending", e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {touched.attending && errors.attending && (
                  <FormHelperText error>{errors.attending}</FormHelperText>
                )}
              </FormControl>

              <TextField
                name="numberOfAttendees"
                onChange={handleChange}
                value={values.numberOfAttendees}
                inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
                error={touched.numberOfAttendees && errors.numberOfAttendees}
                helperText={
                  touched.numberOfAttendees && errors.numberOfAttendees
                }
                onBlur={handleBlur}
                label="Number of attendees"
                sx={{ my: 4 }}
                size="small"
              />

              {/* Next button */}

              {/* Next step = for each num of attendees show name, (default ceremony and evening to true), dietary requirements multi-select */}

              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Submit response
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeTsCRYgx_r3cyuH-bv4_vCDabWc-qYo383winNUxr0BleEzQ/viewform?embedded=true"
        width="100%"
        style={{
          minHeight: "100vh",
          paddingTop: "25px",
          zIndex: 2,
          border: "none",
        }}
        title="rsvp-form"
        onLoad={() => setLoading(false)}
      >
        <Typography sx={{ color: "#fff", fontSize: "1000px" }}>
          Loading…
        </Typography>
      </iframe> */}
      <Card
        sx={{
          zIndex: 2,
          width: isMobile ? "95%" : "70%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <CardHeader
          sx={{ p: 1 }}
          title={
            <Button
              fullWidth
              sx={{
                padding: 0,
                margin: 0,
                color: "#333",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setExpanded(!expanded)}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Having issues with the form?{" "}
                {!expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Typography>
            </Button>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              Having issues with the form? Email{" "}
              <Link
                to="mailto:samandleanne24@gmail.com"
                target="_blank"
                rel="noreferer"
              >
                samandleanne24@gmail.com
              </Link>{" "}
              instead. Please include names of all attendees as well as dietary
              requirements.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Rsvp;
