"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useForm, FieldValues } from "react-hook-form";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userLogin from "@/services/userLogin";
import { tokenKey } from "@/constants/tokenKey";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const defaultTheme = createTheme();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    const res = await userLogin(values);

    if (res.success) {
      await localStorage.setItem(tokenKey, res.data.token);
      toast.success(res.message);
      router.push("/");
    }
    else {
      toast.error(res.message)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(handleLogin)}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email", {
                required: "Email is required",
              })}
              fullWidth
              size="small"
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                my: 2,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              {...register("password", {
                required: "Password is required",
              })}
              fullWidth
              size="small"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
