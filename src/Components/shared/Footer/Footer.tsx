import React from "react";
import Image from "next/image";
import logo from "@/assets/lost_found-logo.png";
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer: React.FC = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{ backgroundColor: "#46344E", color: "white",mt:2, py: 5 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} textAlign="center">
              <Box
                sx={{
                  position: "relative",
                  height: 106,
                  width: 116,
                  borderRadius: "50%",
                  mb: 2,
                  overflow: "hidden",
                  mx: "auto",
                }}
              >
                <Image src={logo} alt="Logo" layout="fill" objectFit="cover" />
              </Box>
              <Typography variant="body2">
                <span style={{ color: "#00f" }}>
                  Lost and Found organization
                </span>
                <br />
                Exploring Recipes since 2022
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Link href="#" color="inherit" display="block">
                About us
              </Link>
              <Link href="#" color="inherit" display="block">
                Contact
              </Link>
              <Link href="#" color="inherit" display="block">
                Our Service
              </Link>
              <Link href="#" color="inherit" display="block">
                Gallery
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <Link href="#" color="inherit" display="block">
                Terms of use
              </Link>
              <Link href="#" color="inherit" display="block">
                Privacy policy
              </Link>
              <Link href="#" color="inherit" display="block">
                Cookie policy
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                <PermPhoneMsgIcon />
                <Link color="inherit" underline="none">
                  +44 (0) 20 9994 7740
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                <EmailIcon />
                <Link color="inherit" underline="none">
                  Tastytreats@gmail.com
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                <LocationOnIcon />
                Blackwell Street, Dry Creek, New York
              </Stack>
              <Divider sx={{ my: 2, backgroundColor: "#ccc" }} />
              <Stack direction="row">
                <FacebookIcon />
                <TwitterIcon  sx={{mx:1}}/>
                <InstagramIcon />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          backgroundColor: "#46344E",
          color: "white",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} - All rights reserved by Lost
          and Found organization
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
