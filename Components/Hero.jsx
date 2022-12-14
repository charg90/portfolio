import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ProfilePhoto from "../public/fotoperfil.jpg";
const Hero = () => {
  return (
    <>
      <Grid item xs={12} md={6} textAlign="center">
        <Image
          width={190}
          height={190}
          src={ProfilePhoto}
          alt="profile photo"
          style={{
            borderRadius: "50%",
            overflow: "hidden",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography color="pink" variant="h1" fontSize="45px">
          Hi 👋,
        </Typography>
        <Typography
          color="pink"
          fontSize="45px"
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
        <Typography color="pink" fontSize="45px">
          I build things for web
        </Typography>
      </Grid>
    </>
  );
};

export default Hero;
