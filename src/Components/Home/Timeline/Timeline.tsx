import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import UpdateIcon from "@mui/icons-material/Update";
import TimelineDot from "@mui/lab/TimelineDot";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import InventoryIcon from "@mui/icons-material/Inventory";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import Typography from "@mui/material/Typography";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { Box, CardMedia, Grid } from "@mui/material";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";

export default function LSTimeline() {
  return (
    <Box
      my={5}
      sx={{
        backgroundImage: `url(https://i.ibb.co/6DL9Gm7/white-aesthetic-background-l6pow.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <HeaderSection title="How Our Lost and Found system work" subTitle="" />
      <Grid
        container
        spacing={4}
        direction={{ xs: "column-reverse", lg: "row" }}
        alignItems="center"
      >
        <Grid item xs={12} lg={7}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="info">
                  <DynamicFormIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Submit Form
                </Typography>
                <Typography>
                  Lost or found an item? Submit the respective form with
                  details.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <FeaturedPlayListIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  View Listings
                </Typography>
                <Typography>
                  Check the Lost Items and Found Items pages.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <InventoryIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Claim Item
                </Typography>
                <Typography>
                  If your lost item is found, submit a claim with proof.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="success">
                  <DomainVerificationIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Verification
                </Typography>
                <Typography>Founder reviews and verifies the claim.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="error">
                  <AssignmentReturnIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Return Item
                </Typography>
                <Typography>Arrange for the item to be returned.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="success">
                  <UpdateIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Update Status
                </Typography>
                <Typography>
                  Owner updates the item status to (Found) once received.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={12} lg={5}>
          <CardMedia
            component="img"
            alt="bg"
            image="https://i.ibb.co/rcyfHGm/tuxpi-com-1717408684-modified.png"
            sx={{
              maxHeight: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
