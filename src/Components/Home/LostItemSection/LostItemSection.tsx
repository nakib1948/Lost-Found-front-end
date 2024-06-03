"use client";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import Loading from "@/Components/Loading/Loading";
import { useGetAllLostItemQuery } from "@/redux/api/lostItemApi";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import LostItemCard from "./LostItemCard";
const LostItemSection = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;
  const { data, isLoading } = useGetAllLostItemQuery({ ...query });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container sx={{ mt: 2 }}>
      <HeaderSection
        title="Recently Lost Items"
        subTitle="Take a look at the items that have been reported lost recently. If you recognize any of these items or have found something similar, please help us reunite them with their rightful owners"
      />
      <Box mb={2}></Box>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },

          992: {
            slidesPerView: 3,
          },
        }}
      >
        {data?.data.map((data: any, index: number) => (
          <SwiperSlide key={index}>
            <LostItemCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default LostItemSection;
