import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getLPTheme from "../../getLPTheme";
import { alpha, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img from "../../assets/Jurassic World Logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Api from "../../utilities/Api";
import SignUp from "../../components/SignUp";
import NoData from "../../components/NoData";
import { useToggleTheme } from "../../context/ToggleThemeContext";

const Details = () => {
  const { isDark } = useToggleTheme();

  const [details, setDetails] = useState([]);

  const LPtheme = createTheme(getLPTheme(isDark));

  const slug = window.location.href.split("/").pop();
  console.log(slug);

  useEffect(() => {
    const fetchDetails = async () => {
      if (slug === "107" || slug === "108" || slug === "109") {
        const response = await Api.get(`event/${slug}`);
        setDetails(response);
        console.log(response);
      }
    };
    fetchDetails();
  }, [slug]);
  console.log(details);

  return (
    <ThemeProvider theme={LPtheme}>
      {slug === "combined" ? (
        <>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <GridItem1 />
            <GridCombined />
          </Grid>
        </>
      ) : slug === "small" ? (
        <>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <GridItem1 />
            <SignUp />
          </Grid>
        </>
      ) : slug === "medium" ? (
        <>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <GridItem1 />
            <SignUp />
          </Grid>
        </>
      ) : (
        <NoData />
      )}
    </ThemeProvider>
  );
};

export default Details;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/">
        Terms and Conditions
      </Link>
    </Typography>
  );
}

const GridItem1 = () => {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage:
          'url("/static/images/templates/templates-images/sign-in-side-bg.png")',
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 6 },
            pb: { xs: 8, sm: 6 },
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                width: "220px",
                borderRadius: "20px",
              }}
            >
              <img alt="abc" src={img} />
            </Box>

            <Box
              sx={(theme) => ({
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "#FBFCFE"
                    : "rgb(0 0 0 / 30%)",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "0 0 10px 0 rgb(0 0 0 / 30%)"
                    : "",
                height: "170px",
                borderRadius: "20px",
                width: "auto",
              })}
            >
              <Typography variant="h2" sx={{ p: 2 }}>
                LOKT - Jurassic World - Combined
              </Typography>
            </Box>
          </Box>
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === "light" ? "#FBFCFE" : "rgb(0 0 0 / 30%)",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 0 10px 0 rgb(0 0 0 / 30%)"
                  : "",
              height: "425px",
              borderRadius: "20px",
              width: "100%",
              mt: 1,
            })}
          >
            <p
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Welcome to the Jurassic World Exhibit at Trafford Centre!</strong></p>\n<p>Thank you for choosing our secure locker service to enhance your experience. Our lockers provide a safe and convenient place to store your belongings for up to 2 hours while you explore the wonders of Jurassic World.</p>\n<h3>How to Rent a Locker:</h3>\n<ol>\n<li><strong>Select a Locker:</strong> Choose an available locker from our map.</li>\n<li><strong>Secure Your Belongings:</strong> Follow the instructions to store your items safely.</li>\n<li><strong>Enjoy the Exhibit:</strong> Explore without the hassle of carrying bags.</li>\n</ol>\n<h3>Pricing:</h3>\n<p>There are 2 locker size options Small and medium for a maximum 2 hour booking.</p>\n<p><strong>Medium Locker - </strong>&pound;4.00 for 2 hours</p>\n<p><strong>Small Locker - </strong>&pound;3 for 2 hours</p>\n<p><strong>Need Help?</strong></p>\n<p>Please contact a memeber of staff for assistance</p>",
              }}
              style={{ padding: "20px", fontSize: "1.2em" }}
            ></p>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
};

const GridCombined = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!submitted ? (
          <>
            <Typography component="h1" variant="h4">
              Check Availability
            </Typography>

            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                name="number"
                placeholder="Hours :"
                autoFocus
                value={inputValue}
                onChange={handleInputChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Copyright sx={{ mt: 4 }} />
            </Box>
          </>
        ) : (
          <Box>
            <Typography sx={{ fontSize: "20px" }}>
              Showind Lock for {inputValue} hours.
            </Typography>
            {/* <Box
                  sx={{
                    color: "#417aff",
                    cursor: "pointer",
                    display: "inline-block",
                    marginBottom: "16px",
                  }}
                  onClick={() => setSubmitted(false)}
                >
                  {"<"}
                </Box> */}
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "110%",
                  }}
                >
                  <Box sx={{ backgroundColor: "#0959AA", p: 2 }}>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      Small Locker - £36.00
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body1">6 Door Locker</Typography>
                    <Divider sx={{ my: 2 }} />{" "}
                    <Typography variant="body2">
                      Size: 24 x 26 x 45cm
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, textAlign: "center" }}>
                    <Button variant="contained">Book Now</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "110%",
                  }}
                >
                  <Box sx={{ backgroundColor: "#0959AA", p: 2 }}>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      Medium Locker - £48.00
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body1">6 Door Locker</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2">
                      Size: 24 x 26 x 45cm
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, textAlign: "center" }}>
                    <Button variant="contained">Book Now</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Grid>
  );
};
