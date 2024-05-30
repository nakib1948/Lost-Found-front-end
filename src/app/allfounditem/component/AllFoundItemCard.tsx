import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IFoundItem } from "@/types/foundItemTypes";
import { Box } from "@mui/material";
import { useState } from "react";
import ClaimModal from "./ClaimModal";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AllFoundItemCard({ data }: { data: IFoundItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ClaimModal open={isModalOpen} setOpen={setIsModalOpen} data={data} />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 194, objectFit: "cover" }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.foundItemName}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
           <LocationOnIcon/> {data.location}
          </Typography>
          <Box sx={{ height: "70px", overflow: "auto" }}>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth size="small" onClick={() => setIsModalOpen(true)}>
            Claim
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
