import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const isMobile = useIsMobile();
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const isAuthenticated = Boolean(localStorage.getItem("authenticated"));

  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <Box
      display="flex"
      width="100%"
      zIndex={2}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Card sx={{ width: isMobile ? "95%" : "40%" }}>
        <CardHeader
          title="Please enter your 4 digit code to access"
          subheader="This can be found on your invitation"
        />
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Here", process.env.REACT_APP_ACCESS_CODE, value);

              if (value !== process.env.REACT_APP_ACCESS_CODE) {
                setError("Incorrect code");
                return;
              }

              localStorage.setItem("authenticated", 1);
              setError();
              return navigate("/");
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <TextField
                  name="access-code"
                  fullWidth
                  placeholder="Access code"
                  size="small"
                  required
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={error}
                  helperText={error}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ height: "40px" }}
                  type="submit"
                >
                  Enter
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
