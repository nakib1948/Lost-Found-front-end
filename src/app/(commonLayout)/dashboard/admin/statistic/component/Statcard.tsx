import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
type TProps = {
  name: string;
  count: number;
  icon: any;
};

export default function Statcard({ name, count, icon }: TProps) {
  return (
    <Card variant="outlined">
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
      <Image src={icon} alt="found" height={50} width={50} />
      </Box>
      <Typography variant="subtitle1">Total Lost Item</Typography>
      <Typography variant="h4" color="primary">{data.data.totalLostItem}U</Typography>
    </CardContent>
  </Card>
  );
}
