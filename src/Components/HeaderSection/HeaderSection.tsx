import { Box, Typography } from "@mui/material";
import React from "react";
type headers = {
  title: string;
  subTitle: string;
};

const HeaderSection = ({ title, subTitle }: headers) => {
  return (
    <Box textAlign="center">
      <Typography
        variant="h6"
        fontWeight="bold"
        textTransform="uppercase"
        color="primary"
        fontStyle="italic"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontStyle="italic"
        color="textSecondary"
        sx={{ mx: "auto", width: "50%", mt: 2 }}
      >
        {subTitle}
      </Typography>
      <Box
        sx={{
          bgcolor: "primary.main",
          height: "4px",
          width: "96px",
          mx: "auto",
          mt: 1,
        }}
      ></Box>
    </Box>
  );
};

export default HeaderSection;
