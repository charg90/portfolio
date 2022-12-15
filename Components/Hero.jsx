import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import ProfilePhoto from "../public/Untitled.jpeg";
const Hero = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        marginTop={10}
      >
        <Grid container item xs={12} md={6} justifyContent="center">
          <Box
            width="310px"
            height="310px"
            sx={{
              display: "flex",
              background: "rgb(19,176,245)",
              background:
                "linear-gradient(45deg, rgba(19,176,245,1) 0%, rgba(231,15,170,1) 100%)",
              borderRadius: "50% ",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={ProfilePhoto}
              alt="profile photo"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <Typography
            color="primary.main"
            variant="h1"
            fontSize={{
              lg: 45,
              xs: 24,
            }}
          >
            Hi 👋,
          </Typography>
          <Typography
            color="primary.main"
            fontSize={{
              lg: 45,
              xs: 24,
            }}
            sx={{
              backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My name is Charly Bozzola
          </Typography>
          <Typography
            color="primary.main"
            fontSize={{
              lg: 45,
              xs: 24,
            }}
          >
            I build things for web
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
