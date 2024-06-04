"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useForm, FieldValues } from "react-hook-form";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUpdatePasswordMutation } from "@/redux/api/userApi";
const defaultTheme = createTheme();
const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();
  const [updatePassword, { isLoading: updating }] = useUpdatePasswordMutation();
  const handleChangePassword = async (values: FieldValues) => {
    if (values.newpassword !== values.confrimNewpassword) {
      toast.error("new password not matched.Try again");
    }
    const data = {
      oldpassword: values.oldpassword,
      newpassword: values.newpassword,
    };
    try {
      const updateResponse = await updatePassword(data);

      if (updateResponse?.data?.success) {
        toast.success("password changed successfully");
        reset();
      } else {
        toast.error("Old password don't matched! Try Again");
      }
    } catch (error) {}
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
            Change Password
          </Typography>
          <form onSubmit={handleSubmit(handleChangePassword)}>
            <TextField
              id="outlined-basic"
              label="Old Password"
              type="password"
              variant="outlined"
              {...register("oldpassword", {
                required: "Password is required",
              })}
              fullWidth
              size="small"
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mt: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="New Password"
              type="password"
              variant="outlined"
              {...register("newpassword", {
                required: "newpassword is required",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                  message:
                    "Password must contain at least one letter, one number, one special character, and be at least 6 characters long",
                },
              })}
              fullWidth
              size="small"
              error={!!errors.newpassword}
              helperText={errors.newpassword?.message}
              sx={{ my: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Confrim New Password"
              variant="outlined"
              type="password"
              {...register("confrimNewpassword", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                  message:
                    "Password must contain at least one letter, one number, one special character, and be at least 6 characters long",
                },
              })}
              fullWidth
              size="small"
              error={!!errors.confrimNewpassword}
              helperText={errors.confrimNewpassword?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confrim
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ChangePassword;
