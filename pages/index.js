import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import Head from "next/head";
import About from "../Components/About";
import Hero from "./../Components/Hero";
import NavBar from "./../Components/Navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Charly Bozzola Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        direction="column"
        spacing={10}
        backgroundColor="#191919"
        alignItems="center"
      >
        <NavBar />
        <Hero />
        <About />
      </Stack>
    </>
  );
}
