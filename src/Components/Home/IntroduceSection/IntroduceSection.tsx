"use client"
import { TypeAnimation } from "react-type-animation";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import Link from "next/link";

const IntroduceSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(https://i.ibb.co/82bJv42/michael-dziedzic-1bjs-ASjhfk-E-unsplash.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
      >
        <Grid
          container
          spacing={4}
          direction={{ xs: "column-reverse", lg: "row" }}
          alignItems="center"
          
        >
          <Grid item xs={12} lg={7}>
            <Box width={"90%"}>
              <Typography color="white" variant="h4" sx={{fontWeight: 'bold'}} gutterBottom>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Retrieve your lost items, return what you have found!",
                  1000,
                  "Reunite lost belongings with their rightful owners!",
                  1000,
                  "Help us bring lost items back to their homes!",
                  1000,
                  "Connecting lost items with their owners, one at a time!"
                ]}
                speed={40}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
                
              </Typography>
              <Typography color="white" variant="subtitle1" sx={{ py: 2,fontWeight: 'bold' }} >
                Welcome to our Lost and Found platform, your go-to place for
                reuniting lost items with their owners. Report lost items, list
                found objects, and connect with others to bring belongings back
                to their rightful owners. Join us in making a difference and
                spreading kindness.
              </Typography>
              <Button component={Link} href="/foundItem" variant="contained" color="primary" size="large">
                Report a Found Item
              </Button>
              <Button component={Link} href="/lostItem" variant="outlined" sx={{ml:1,color:"white"}}  size="large">
                Report a lost Item
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <CardMedia
              component="img"
              alt="bg"
              image="https://i.ibb.co/6YPLzmq/gl12.png"
              sx={{
                maxHeight: "100%",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroduceSection;
