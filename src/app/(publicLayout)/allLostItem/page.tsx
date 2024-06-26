"use client";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import { useGetAllLostItemQuery } from "@/redux/api/lostItemApi";
import AllLostItemCard from "./component/AllLostItemCard";
import Link from "next/link";
import Loading from "@/Components/Loading/Loading";
const LostItemspage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [itemCategory, setitemCategory] = useState("");

  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 700,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  if (location) {
    query["location"] = location;
  }

  if (itemCategory) {
    query["itemCategory"] = itemCategory;
  }

  const { data, isLoading } = useGetAllLostItemQuery({ ...query });
  const meta = data?.meta;
  const pageCount = meta?.total ? Math.ceil(meta.total / limit) : 0;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ mt: 1 }}>
      <HeaderSection
        title="All Lost Item"
        subTitle="search for your lost item by category, location,keywords"
      />
      <Stack
        sx={{ display: "flex", flexWrap: "wrap" }}
        direction="row"
        alignItems="center"
      >
        <Stack mx={"auto"} direction="row" alignItems="center">
          <Typography mr={2} variant="body1">
            Search By:
          </Typography>
          <TextField
            placeholder="ex: location,keyword,Item name"
            id="standard-basic"
            label="Search Item"
            variant="standard"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Stack>
        <Button
          sx={{
            mt: {
              xs: 2,
            },
          }}
          component={Link}
          href="/lostItem"
        >
          Report a lost item
        </Button>
      </Stack>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {data?.data.map((data: any, index: number) => (
          <Grid item xs={12} sm={10} md={4} key={index}>
            <AllLostItemCard data={data} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2 }} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={pageCount}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Container>
  );
};

export default LostItemspage;
