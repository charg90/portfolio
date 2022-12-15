import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { navLinks } from "./../Helpers/navLinks";

function NavBar() {
  return (
    <Grid
      container
      width="100% "
      backgroundColor="#191919"
      justifyContent="center"
      height="59px"
    >
      <Grid
        backgroundColor="#191919"
        container
        maxWidth="1193px"
        height="59px"
        justifyContent="space-around"
        alignItems="center"
      >
        {navLinks.map((links) => {
          return (
            <Box key={links.id}>
              <Typography
                fontSize={{ sm: "12px", md: "20px" }}
                fontWeight="500"
                color="primary.main"
              >
                {" "}
                {links.name}{" "}
              </Typography>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
export default NavBar;
