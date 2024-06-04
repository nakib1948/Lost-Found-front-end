"use client";
import { useGetMYProfileQuery } from "@/redux/api/userApi";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditProfile from "./components/EditProfile";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Loading from "@/Components/Loading/Loading";
import { useRouter } from "next/navigation";
const UserProfilepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, refetch } = useGetMYProfileQuery(undefined);
  const router = useRouter();

  useEffect(() => {
    refetch()
  }, []);
  return (
    <>
      <EditProfile
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.data.id}
        data={data}
        refetch={refetch}
      />
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
              <Stack
                direction="row"
                alignContent="center"
                sx={{ cursor: "pointer" }}
                onClick={() => setIsModalOpen(true)}
              >
                <Typography variant="body1" gutterBottom>
                  <BorderColorIcon /> Edit
                </Typography>
              </Stack>
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
                <Paper sx={{ px: 2, py: 5 }}>
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
    </>
  );
};

export default UserProfilepage;
