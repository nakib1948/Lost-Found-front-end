import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import bgImg from "@/assets/lost_found-bg.jpg";

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

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#EDE8F5", py: 5,my:5 }}>
      <HeaderSection title="About Us" subTitle="" />
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
          <Grid item xs={12} lg={5}>
            <CardMedia
              component="img"
              alt="bg"
              image="https://i.ibb.co/17PQ5K1/gl13.png"
              sx={{
                maxHeight: "100%",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Box width={"90%"}>
              <Typography variant="h4" gutterBottom>
                Our Mission and Vision
              </Typography>
              <Typography variant="subtitle1" sx={{ py: 2 }}>
                Welcome to our Lost and Found system, a dedicated platform
                created to help reunite lost items with their rightful owners.
                Our mission is to provide a simple, reliable, and
                community-driven solution for reporting lost belongings and
                listing found items. Whether you’ve lost something precious or
                stumbled upon an item that someone might be missing, we are here
                to facilitate the connection. Founded on the principles of trust
                and community support, our system leverages technology to bring
                people together and solve real-world problems. We believe in the
                power of kindness and the importance of every single item, no
                matter how small it may seem. Join us in our efforts to make a
                difference, one reunited item at a time. Your participation not
                only helps return lost items but also fosters a spirit of
                generosity and care within our community.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
