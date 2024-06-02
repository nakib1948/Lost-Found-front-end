import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { ILostItem } from "@/types/lostItemTypes";
import { formatDate } from "@/utils/dateFormatter";
import { Button, CardActions } from "@mui/material";
import { useUpdateLostItemStatusMutation } from "@/redux/api/lostItemApi";
import { toast } from "sonner";

export default function LostItemCard({ data, refetch }: any) {
  const date = formatDate(data.date);
  const [updateLostItemStatus, { isLoading: updating }] =
    useUpdateLostItemStatusMutation();

  const handleChangeStatus = async (id: string) => {
    try {
      const res = await updateLostItemStatus({ id });
      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.user.name.slice(0, 1)}
          </Avatar>
        }
        title={`Status: ${data.foundStatus}`}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
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
      </CardContent>
      <CardActions>
        {data.foundStatus !== "FOUND" && (
          <Button onClick={() => handleChangeStatus(data.id)} fullWidth>
            Mark As Found
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
