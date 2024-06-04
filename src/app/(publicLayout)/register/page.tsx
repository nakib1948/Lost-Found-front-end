"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { imgUpload } from "@/services/imgUpload";
import { registerUser } from "@/services/userRegister";
import { toast } from "sonner";
import { useForm, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
const defaultTheme = createTheme();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    if (values.password !== values.confrimPassword) {
      toast.error("both password do not matched.correct your password");
      return;
    }
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
    const loginData = {
      email: values.email,
      password: values.password,
    };
    try {
      const imgUrl = await imgUpload(values.image[0]);
      registerData.profile.image = imgUrl;
      const res = await registerUser(registerData);

      if (res.success) {
        toast.success(res.message);
        reset();
        router.push('/login')
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
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
          <form onSubmit={handleSubmit(handleRegister)}>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    {...register("name", { required: "name is required" })}
                    fullWidth
                    size="small"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    fullWidth
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                        message:
                          "Password must contain at least one letter, one number, one special character, and be at least 6 characters long",
                      },
                    })}
                    fullWidth
                    size="small"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="confrim Password"
                    type="password"
                    variant="outlined"
                    {...register("confrimPassword", {
                      required: "confrimPassword is required",
                      pattern: {
                        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                        message:
                          "confrimPassword must contain at least one letter, one number, one special character, and be at least 6 characters long",
                      },
                    })}
                    fullWidth
                    size="small"
                    error={!!errors.confrimPassword}
                    helperText={errors.confrimPassword?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    type="number"
                    variant="outlined"
                    {...register("age", { required: "age is required" })}
                    fullWidth
                    size="small"
                    error={!!errors.age}
                    helperText={errors.age?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth component="label">
                    Upload Image
                    <input
                      {...register("image", { required: "image is required" })}
                      type="file"
                      hidden
                    />
                  </Button>
                  {errors.image && (
                    <small className="text-red-500" role="alert">
                      {errors.image.message}
                    </small>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Bio"
                    multiline
                    variant="outlined"
                    {...register("bio", { required: "bio is required" })}
                    fullWidth
                    error={!!errors.bio}
                    helperText={errors.bio?.message}
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
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
