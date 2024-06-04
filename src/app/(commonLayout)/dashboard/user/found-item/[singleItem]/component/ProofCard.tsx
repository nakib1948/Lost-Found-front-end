import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Modal from "@/Components/Modal/Modal";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const ProofCard = ({ open, setOpen, data }: TProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Claim Request">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 194, objectFit: "cover" }}
          image={data.image}
          title="Proof Image"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
             Lost Date
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <CalendarMonthIcon /> {data?.lostDate}
          </Typography>
          <Box sx={{ height: "70px", overflow: "auto" }}>
            <Typography variant="body2" color="text.secondary">
              {data?.request}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default ProofCard;
