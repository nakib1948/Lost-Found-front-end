"use client";
import { useGetLostItemQuery } from "@/redux/api/lostItemApi";
import { Container, Grid } from "@mui/material";
import LostItemCard from "./components/LostItemCard";
import { ILostItem } from "@/types/lostItemTypes";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import Loading from "@/Components/Loading/Loading";
const LostItemPage = () => {
  const { data, isLoading, refetch } = useGetLostItemQuery(undefined);
  return (
    <Container>
      <HeaderSection title="Your Lost Item" subTitle="" />
      {isLoading && <Loading />}
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {data?.data.map((data: ILostItem, index: number) => (
          <Grid item xs={12} sm={10} md={4} key={index}>
            <LostItemCard data={data} refetch={refetch} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LostItemPage;
