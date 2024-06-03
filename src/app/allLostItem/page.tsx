"use client";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import Loading from "@/Components/Loading/Loading";
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

const LostItemspage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
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
      <Stack direction="row" alignItems="center">
        <Typography variant="body1">Filter By:</Typography>
        <Box marginLeft={2}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Chittagong"}>Chittagong</MenuItem>
              <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
              <MenuItem value={"Khulna"}>Khulna</MenuItem>
              <MenuItem value={"Rajsahi"}>Rajsahi</MenuItem>
              <MenuItem value={"Borisal"}>Borisal</MenuItem>
              <MenuItem value={"sylet"}>sylet</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={itemCategory}
              onChange={(e) => setitemCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Phone"}>Phone</MenuItem>
              <MenuItem value={"Watch"}>Watch</MenuItem>
              <MenuItem value={"Walet"}>Walet</MenuItem>
              <MenuItem value={"Money"}>Money</MenuItem>
              <MenuItem value={"Document"}>Document</MenuItem>
              <MenuItem value={"Instrument"}>Instrument</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Stack mx={"auto"} direction="row" alignItems="center">
          <Typography mr={2} variant="body1">
            Search By:
          </Typography>
          <TextField
            placeholder="ex: location,keyword,Item name"
            id="standard-basic"
            label="Search Item"
            variant="standard"
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </Stack>
        <Button>Report a lost item</Button>
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
