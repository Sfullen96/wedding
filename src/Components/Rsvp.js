import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFormik } from "formik";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useIsMobile from "../Hooks/useIsMobile";
import Name from "./Name";
import DietaryRequirements from "./DietaryRequirements";
import { toast } from "react-toastify";

const Rsvp = () => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);
  const [numberOfSections, setNumberOfSections] = useState([1]);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    attending: Yup.string().required("This field is required"),
    numberOfAttendees: Yup.number()
      .typeError("Must be a number")
      .integer("Must be a whole number")
      .min(1, "Must be a minimum of 1")
      .max(10, "The maximum is 10")
      .when("attending", {
        is: "yes",
        then: (schema) => schema.required("Number of attendees is required"),
        otherwise: (schema) => schema,
      }),
    responses: Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        ceremony: Yup.string(),
        evening: Yup.string(),
        dietaryRequirements: Yup.array().nullable(),
      })
    ),
  });

  const form = useFormik({
    validationSchema: schema,
    initialValues: {
      responses: [
        {
          firstName: "",
          lastName: "",
          ceremony: "",
          evening: "",
          dietaryRequirements: [],
        },
      ],
    },
    onSubmit: async (values, { setSubmitting }) => {
      if (values?.attending === "no") {
        const j = await fetch(`${process.env.REACT_APP_API_URL}/wedding/rsvp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            form.values.responses.map((r) => ({
              ...r,
              ceremony: 0,
              evening: 0,
            }))
          ),
        });
        const res = await j.json();

        if (res.success === true) {
          toast.success(
            "Your response has been successfully saved, thank you."
          );
          navigate("/");
        } else {
          toast.error(
            "There was an issue submitting your response. Please instead email samandleanne24@gmail.com with your details."
          );
        }
      } else {
        const j = await fetch(`${process.env.REACT_APP_API_URL}/wedding/rsvp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            form.values.responses.map((r) => ({
              ...r,
              ceremony: 1,
              evening: 1,
            }))
          ),
        });
        const res = await j.json();

        if (res.success === true) {
          toast.success(
            "Your response has been successfully saved, thank you."
          );
          navigate("/");
        } else {
          toast.error(
            "There was an issue submitting your response. Please instead email samandleanne24@gmail.com with your details."
          );
        }
      }
    },
  });

  useEffect(() => {
    form.setFieldValue(
      "responses",
      Array(form.values.numberOfAttendees).fill({
        firstName: "",
        lastName: "",
        ceremony: "",
        evening: "",
        dietaryRequirements: [],
      })
    );
  }, [form.values.numberOfAttendees]);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    handleBlur,
  } = form;

  return (
    <>
      <Box
        zIndex="4"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width={isMobile ? "100%" : "80%"}
        textAlign="center"
        overflow="auto"
      >
        <Card
          sx={{
            p: 0,
            height: "100%",
            width: isMobile ? "95%" : "70%",
            textAlign: "left",
            mb: 4,
            maxHeight: "calc(100vh - 200px)",
            overflow: "auto",
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
                R.S.V.P
              </Typography>
            }
          />

          <form onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={0}>
                {step === 0 && (
                  <>
                    <Grid xs={12} md={12}>
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
                            if (e.target.value !== form.values.attending) {
                              setNumberOfSections([1]);
                              setFieldValue("numberOfAttendees", "");
                            }
                          }}
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                        {touched.attending && errors.attending && (
                          <FormHelperText error>
                            {errors.attending}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    {values.attending === "no" && (
                      <FormControl
                        required
                        error={touched.attending && errors.attending}
                        sx={{ mb: 4, mt: 2, width: "100%" }}
                      >
                        <Grid xs={12} sx={{ mb: 1 }}>
                          <FormLabel id="attending-radio">
                            Please provide the names of those unable to attend:
                          </FormLabel>
                        </Grid>
                        <Grid item xs={12}>
                          {numberOfSections.map((x, i) => (
                            <>
                              <Name form={form} index={i} />
                              <Divider sx={{ my: 2 }} />
                            </>
                          ))}
                          <Button
                            variant="outlined"
                            color="secondary"
                            type="button"
                            onClick={() =>
                              setNumberOfSections((prevState) => [
                                ...prevState,
                                1,
                              ])
                            }
                          >
                            Add a name <AddIcon />
                          </Button>
                        </Grid>
                      </FormControl>
                    )}
                    {values.attending === "yes" && (
                      <FormControl
                        required
                        error={touched.attending && errors.attending}
                        sx={{ mb: 4, mt: 2 }}
                      >
                        <Grid xs={12} md={12} sx={{ mb: 1 }}>
                          <FormLabel id="attending-radio">
                            Please provide the number of attendees:
                          </FormLabel>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <TextField
                            name="numberOfAttendees"
                            onChange={(e) => {
                              setNumberOfSections(
                                Array.from(Array(Number(e.target.value)))
                              );
                              form.setFieldValue(
                                "numberOfAttendees",
                                Number(e.target.value)
                              );
                            }}
                            value={values.numberOfAttendees}
                            inputProps={{
                              inputmode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            error={
                              touched.numberOfAttendees &&
                              errors.numberOfAttendees
                            }
                            helperText={
                              touched.numberOfAttendees &&
                              errors.numberOfAttendees
                            }
                            onKeyDown={(e) => {
                              if (
                                e.key === "Enter" &&
                                !form.errors.numberOfAttendees
                              ) {
                                e.preventDefault();
                                setStep(1);
                              }
                            }}
                            onBlur={handleBlur}
                            label="Number of attendees"
                            size="small"
                          />
                        </Grid>
                      </FormControl>
                    )}
                    <Grid item xs={12} sx={{ textAlign: "right" }}>
                      {values.attending === "no" ? (
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting || !values.attending}
                        >
                          Submit response
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          disabled={
                            isSubmitting ||
                            !values.attending ||
                            !values.numberOfAttendees
                          }
                          onClick={() => setStep(1)}
                        >
                          Next <NavigateNextIcon fontSize="small" />
                        </Button>
                      )}
                    </Grid>
                  </>
                )}
                {step === 1 && (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="body1" gutterBottom>
                        <i>
                          Please only include those named on your invitation.
                        </i>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {numberOfSections.map((x, i) => (
                        <>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <FormLabel sx={{ mb: 2 }}>
                              Person {i + 1} details:
                            </FormLabel>
                          </Box>
                          <Name form={form} index={i} />
                          <DietaryRequirements form={form} index={i} />
                          <Divider sx={{ my: 3 }} />
                        </>
                      ))}
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "right" }}>
                      <Button
                        type="button"
                        variant="outlined"
                        color="secondary"
                        disabled={isSubmitting || !values.attending}
                        sx={{ mr: 3 }}
                        onClick={() => setStep(0)}
                      >
                        <ArrowBackIosIcon fontSize="small" /> Back
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting || !values.attending}
                      >
                        Submit response
                      </Button>
                    </Grid>
                  </>
                )}
              </Grid>
            </CardContent>
          </form>
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
