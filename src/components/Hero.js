import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import img1 from "../assets/Jurassic World Logo.png";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/${item.id}`);
  };

  const items = [
    {
      id: 107,
      slug: "combined",
      title: "LOKT - Jurassic World - Combined",
      image: img1,
    },
    {
      id: 108,
      slug: "small",
      title: "LOKT - Jurassic World - Small",
      image: img1,
    },
    {
      id: 109,
      slug: "medium",
      title: "LOKT - Jurassic World - Medium",
      image: img1,
    },
  ];

  return (
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
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 6 },
        }}
      >
        <Container>
          <Grid container spacing={6}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 280,
                    boxShadow: "0 0 10px 0 rgb(0 0 0 / 30%)",
                  }}
                >
                  <CardActionArea onClick={() => handleClick(item)}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.altText}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
