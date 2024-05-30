"use client";
import Loading from "@/Components/Loading/Loading";
import { Container, Grid } from "@mui/material";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import { useFoundLostItemQuery } from "@/redux/api/foundItemApi";
import { IFoundItem } from "@/types/foundItemTypes";
import FoundItemCard from "./components/FoundItemCard";

const FoundItemPage = () => {
  const { data, isLoading, refetch } = useFoundLostItemQuery(undefined);
  return (
    <Container>
      {isLoading && <Loading />}
      <HeaderSection title="Your Found Item" subTitle=""/>
      <Grid container spacing={2} sx={{mt:1}}>
        {data?.data.map((data:IFoundItem, index: number) => (
          <Grid item xs={12} sm={10} md={4} key={index}>
            <FoundItemCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FoundItemPage;
