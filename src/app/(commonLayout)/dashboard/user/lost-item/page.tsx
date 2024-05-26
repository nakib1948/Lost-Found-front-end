"use client";
import Loading from "@/Components/Loading/Loading";
import { useGetLostItemQuery } from "@/redux/api/lostItemApi";
import { Container, Grid } from "@mui/material";
import LostItemCard from "./components/LostItemCard";
import { ILostItem } from "@/types/lostItemTypes";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";

const LostItemPage = () => {
  const { data, isLoading, refetch } = useGetLostItemQuery(undefined);
  return (
    <Container>
      {isLoading && <Loading />}
      <HeaderSection title="Your Lost Item" subTitle=""/>
      <Grid container spacing={2} sx={{mt:1}}>
        {data?.data.map((data: ILostItem, index: number) => (
          <Grid item xs={12} sm={10} md={4} key={index}>
            <LostItemCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LostItemPage;