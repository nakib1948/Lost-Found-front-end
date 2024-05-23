"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FieldValues, useForm } from "react-hook-form";
import LFForm from "@/Components/ReuseableForm/LFForm";
import LFInput from "@/Components/ReuseableForm/LFInput";
import LFFileUploader from "@/Components/ReuseableForm/LFFileUploader";
import { imgUpload } from "@/services/imgUpload";
import { registerUser } from "@/services/userRegister";
import { toast } from "sonner";

const defaultTheme = createTheme();

export default function SignUp() {
  const methods = useForm()
  const handleRegister = async (values: FieldValues) => {
    const registerData = {
      name: values.name,
      email: values.email,
      password: values.password,
      profile: {
        bio: values.bio,
        age: Number(values.age),
        image: "",
      },
    };
    try {
      const imgUrl = await imgUpload(values.file);
      registerData.profile.image = imgUrl;
      const res = await registerUser(registerData);

      if (res.success) {
        toast.success(res.message);
        methods.reset(); 
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <LFForm onSubmit={handleRegister}>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <LFInput
                    name="name"
                    type="string"
                    label="Name"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LFInput
                    name="email"
                    type="string"
                    label="Email"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LFInput
                    name="password"
                    type="string"
                    label="Password"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LFInput
                    name="confrimPassword"
                    type="string"
                    label="confrim Password"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LFInput
                    name="age"
                    type="number"
                    label="Age"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LFFileUploader name="file" label="upload image" />
                </Grid>

                <Grid item xs={12}>
                  <LFInput
                    name="bio"
                    type="string"
                    label="Bio"
                    sx={{ mb: 2 }}
                    fullWidth
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </LFForm>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
