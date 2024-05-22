import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "column",
        my: 16,
        textAlign:'center'
      }}
    >
      <Box sx={{ width: '75%',mx:'auto' }}>
        <Typography variant="h3" component="h2" fontWeight={500}>
        Retrieve your lost items, return what you’ve found!
        </Typography>
      
        <Typography variant="h6" component="p" fontWeight={400} my={2}>
        Welcome to our Lost and Found platform, your go-to place for reuniting lost items with their owners. Report lost items, list found objects, and connect with others to bring belongings back to their rightful owners. Join us in making a difference and spreading kindness.
        </Typography>
        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "5px",
          }}
        >
          Contact us
        </Button>
      </Box>
    </Container>
  );
};

export default HeroSection;
