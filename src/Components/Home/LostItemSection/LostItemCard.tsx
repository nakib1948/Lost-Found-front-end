import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { formatDate } from "@/utils/dateFormatter";
import Link from "next/link";

export default function LostItemCard({ data }: any) {
  const date = formatDate(data.date);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 194, objectFit: "cover" }}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.itemCategory}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <LocationOnIcon /> {data.location}
        </Typography>
        <Box sx={{ height: "70px", overflow: "auto" }}>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="body2">status: {data.foundStatus}</Typography>
          <Typography variant="body2">Date: {date}</Typography>
        </Box>
      </CardContent>
      <CardActions>
         <Button fullWidth component={Link} href="/foundItem"> Report if found</Button>
      </CardActions>
    </Card>
  );
}
