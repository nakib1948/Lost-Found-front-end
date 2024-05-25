"use client";
import Loading from "@/Components/Loading/Loading";
import { useGetMYProfileQuery } from "@/redux/api/userApi";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
const UserProfilepage = () => {
  const { data, isLoading } = useGetMYProfileQuery(undefined);

  console.log(data);
  return (
    <Container>
      {isLoading && <Loading />}
      <Box
        sx={{
          backgroundColor: "",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" gutterBottom>
              My Profile
            </Typography>
            <EditIcon />
          </Stack>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Avatar
                alt="Remy Sharp"
                src={data?.data.image}
                sx={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Name
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {data?.data.user.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Age
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {data?.data.age}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Email
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {data?.data.user.email}
                    </Typography>
                  </Box>
                </Stack>
                <Typography variant="body1" paragraph>
                  {data?.data.bio}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default UserProfilepage;
