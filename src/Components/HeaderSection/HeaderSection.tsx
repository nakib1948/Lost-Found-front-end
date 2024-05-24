import { Box, Typography } from "@mui/material";
import React from "react";
type headers = {
  title: string;
  subTitle: string;
};

const HeaderSection = ({ title, subTitle }: headers) => {
  return (
    <Box sx={{ width: "75%", mx: "auto", textAlign: "center", mt: 4 }}>
      <Typography variant="h5" component="h6" fontWeight={500}>
        {title}
      </Typography>

      <Typography variant="h6" component="p" fontWeight={500} my={2}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default HeaderSection;
