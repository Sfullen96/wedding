import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const isMobile = useIsMobile();
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const isAuthenticated = Boolean(localStorage.getItem("authenticated"));

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }

    if (new Date() > new Date("2024-08-20")) {
      localStorage.setItem("authenticated", 1);
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box
      display="flex"
      width="100%"
      zIndex={2}
      justifyContent="center"
      alignItems={isMobile ? "start" : "center"}
      mt={isMobile ? 3 : 0}
      minHeight="100vh"
    >
      <Card sx={{ width: isMobile ? "95%" : "40%" }}>
        <CardHeader
          title="Please enter your 4 digit code to access"
          subheader={
            <Typography variant="caption">
              This can be found on your invitation. Any issues accessing, please
              email{" "}
              <Link
                to="mailto:samandleanne24@gmail.com"
                target="_blank"
                rel="noreferer"
              >
                samandleanne24@gmail.com
              </Link>
            </Typography>
          }
        />
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();

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
                  autoFocus
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
