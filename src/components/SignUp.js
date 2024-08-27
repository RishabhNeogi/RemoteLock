import React from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignIn from "./SignIn";
import { useSignIn } from "../context/SignInContext";
import getLPTheme from "../getLPTheme";
import { useToggleTheme } from "../context/ToggleThemeContext";

const SignUp = () => {
  const defaultTheme = createTheme();
  const { isDark } = useToggleTheme();

  const LPtheme = createTheme(getLPTheme("light"));
  const SignInState = useSignIn();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handleClick = () => {
    SignInState.setIsSignIn(true);
    console.log(SignInState.isSignIn);
  };
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <ThemeProvider theme={defaultTheme}>
        {!SignInState.isSignIn ? (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "50px",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    onClick={() => {
                      handleClick();
                    }}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <SignIn />
        )}
      </ThemeProvider>
    </Grid>
  );
};

export default SignUp;
