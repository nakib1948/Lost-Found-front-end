import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IFoundItem } from "@/types/foundItemTypes";
import { Button, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FoundItemCard({ data }: { data: IFoundItem }) {
  const router = useRouter()
  const handleSeeClaim = (id:string)=>{
   router.push(`found-item/${id}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 194, objectFit: "cover" }}
        image={data.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.itemCategory}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ower Status: {data.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleSeeClaim(data.id)} fullWidth size="small">
          See Claim
        </Button>
      </CardActions>
    </Card>
  );
}
