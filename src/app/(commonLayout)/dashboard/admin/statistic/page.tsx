"use client";
import Loading from "@/Components/Loading/Loading";
import { useGetAllStatisticsQuery } from "@/redux/api/userApi";
import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Statcard from "./component/Statcard";
import claim from "@/assets/Gallery/claim.png"
import found from "@/assets/Gallery/found.png"
import user from "@/assets/Gallery/user.png"
import lost from "@/assets/Gallery/lost.png"
import Image from "next/image";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";

const Statistics = () => {
  const { data, isLoading, refetch } = useGetAllStatisticsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <Box>
        <HeaderSection title="Overall Statistic" subTitle="" />
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{mt:2}}>
      <Grid item xs={12} sm={4} >
        <Card variant="outlined">
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
            <Image src={found} alt="found" height={50} width={50} />
              {/* <FavoriteIcon color="primary" style={{ fontSize: 32 }} /> */}
            </Box>
            <Typography variant="subtitle1">Total Found Item</Typography>
            <Typography variant="h4" color="primary">{data?.data?.totalFoundItem}U</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
            <Image src={lost} alt="found" height={50} width={50} />
            </Box>
            <Typography variant="subtitle1">Total Lost Item</Typography>
            <Typography variant="h4" color="primary">{data?.data?.totalLostItem}U</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
            <Image src={claim} alt="found" height={50} width={50} />
            </Box>
            <Typography variant="subtitle1">Total Found Item Owner</Typography>
            <Typography variant="h4" color="primary">{data?.data?.ownerFound}U</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
            <Image src={user} alt="found" height={50} width={50} />
            </Box>
            <Typography variant="subtitle1">Total user</Typography>
            <Typography variant="h4" color="primary">{data?.data?.totalUser}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Statistics;
