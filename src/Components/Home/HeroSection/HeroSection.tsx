import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import bgImg from "@/assets/lost_found-bg.jpg"
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      
        textAlign: "center",
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        color: "white",
       
        boxSizing: "border-box",
        opacity: 0.8, 
          zIndex: -1,
      }}
    >
      <Box sx={{ width: "50%", mx: "auto", }}>
        <Typography   variant="h3" component="h2" fontWeight={500}>
          Retrieve your lost items, return what you have found!
        </Typography>

        <Typography   variant="h6" component="p" fontWeight={500} my={2}>
          Welcome to our Lost and Found platform, your go-to place for reuniting
          lost items with their owners. Report lost items, list found objects,
          and connect with others to bring belongings back to their rightful
          owners. Join us in making a difference and spreading kindness.
        </Typography>
        <Button>Report a Lost Item</Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "10px",
          }}
        >
          Report a Found Item
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
