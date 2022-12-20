import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Star from "@mui/icons-material/StarBorderPurple500TwoTone";
import React from "react";

const About = () => {
  return (
    <Stack maxWidth="1200px" gap={4} padding={3}>
      <Typography
        color="primary.main"
        fontSize={{
          lg: 45,
          xs: 24,
        }}
        textAlign="center"
        fontWeight={700}
      >
        About Me
      </Typography>
      <Typography
        fontSize="18px"
        maxWidth="708px"
        color="primary.main"
        fontWeight="400"
      >
        I am an independent Front End Developer with 2 years of experience in
        blending the art of design with skill of programming to deliver an
        immersive and engaging user experience through efficient website
        development, proactive feature optimization, and relentless debugging.
        Very passionate about aesthetics and UI design.
      </Typography>
      <Typography
        color="primary.main"
        fontSize={{
          lg: 45,
          xs: 24,
        }}
        fontWeight={700}
      >
        Work Experience
      </Typography>

      <Stack
        divider={<Divider orientation="horizontal" flexItem color="white" />}
        color="primary.main"
        spacing={2}
      >
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Q Capital{" "}
            </Typography>
            <Chip label="Freelance" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Design Landing Page with ReactJS" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Framer Motion for animations" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="FireBase for login and registration" />
            </ListItem>
          </List>
        </Stack>

        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MegaPrice SLR
            </Typography>
            <Chip label="Freelance" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Design Landing Page with ReactJS" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Creation of storoge and API with Firebase" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Google Analytics for marketing strategy" />
            </ListItem>
          </List>
        </Stack>
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              E-Commerce PEIT Project
            </Typography>
            <Chip label="Freelance" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Redux for component comunication" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Agile methologies Scrum/Kanban" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Chakra UI for design" />
            </ListItem>
          </List>
        </Stack>
      </Stack>
      <Typography
        color="primary.main"
        fontSize={{
          lg: 45,
          xs: 24,
        }}
        fontWeight={700}
      >
        Education{" "}
      </Typography>
      <Stack
        divider={<Divider orientation="horizontal" flexItem color="white" />}
        color="primary.main"
        spacing={2}
      >
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Alkemy (2022)
            </Typography>
            <Chip label="Approved" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Agile methologies Scrum/Kanban " />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="React JS" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Git/GitHub" />
            </ListItem>
          </List>
        </Stack>

        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Educacion IT
            </Typography>
            <Chip label="Aproved" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Software test Cases (2022)" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="Analysis and desing of test cases (2022)" />
            </ListItem>
          </List>
        </Stack>
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Diplomatura Full Stack UTN (2022)
            </Typography>
            <Chip label="Approve" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="HTML / CSS / javaScript" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="ReactJS - NodeJS / ExpressJS" />
            </ListItem>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="SQL / MongoDb" />
            </ListItem>
          </List>
        </Stack>
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight={700}
              fontSize="20px"
              sx={{
                backgroundImage: `linear-gradient(45deg, #13B0F5, #E70FAA)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Universidad de Buenos Aire
            </Typography>
            <Chip label="On Course" color="success" />
          </Stack>
          <List>
            <ListItem disablePadding>
              <Star />
              <ListItemText primary="engineering informatics" />
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
