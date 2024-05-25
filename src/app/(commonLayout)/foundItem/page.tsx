"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { imgUpload } from "@/services/imgUpload";
import { toast } from "sonner";
import CssBaseline from "@mui/material/CssBaseline";
import { useForm, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { getUserInfo } from "@/services/authService";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import { useCreateFoundItemMutation } from "@/redux/api/foundItemApi";
const defaultTheme = createTheme();
const FoundItempage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const [createFoundItem] = useCreateFoundItemMutation();
  const handleRegister = async (values: FieldValues) => {
    const user = await getUserInfo();
    const imgUrl = await imgUpload(values.image[0]);
    const data: FieldValues = {
      itemCategory: values.itemCategory,
      foundItemName: values.foundItemName,
      description: values.description,
      date: values.date,
      location: values.location,
      email: user.email,
      phone: values.phone,
      image: imgUrl,
    };
    try {
      const res = await createFoundItem(data);
      
      if (res.data.success) {
        toast.success(res.data.message);
        reset()
      } else {
        toast.error(res.data.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <Container>
      <HeaderSection
        title=" Submit Found Property Report"
        subTitle=" Report found item by providing its category, description, date,
          location, and your contact details. This helps us identify and return
          the item quickly."
      />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit(handleRegister)}>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      label="foundItemName"
                      variant="outlined"
                      {...register("foundItemName", {
                        required: "foundItemName is required",
                      })}
                      fullWidth
                      size="small"
                      error={!!errors.foundItemName}
                      helperText={errors.foundItemName?.message}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      label="itemCategory"
                      variant="outlined"
                      {...register("itemCategory", {
                        required: "itemCategory is required",
                      })}
                      placeholder="Ex: Phone, watch, key..."
                      fullWidth
                      size="small"
                      error={!!errors.itemCategory}
                      helperText={errors.itemCategory?.message}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      label="phone"
                      variant="outlined"
                      {...register("phone", {
                        required: "phone is required",
                      })}
                      fullWidth
                      size="small"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      label="location"
                      variant="outlined"
                      {...register("location", {
                        required: "location is required",
                      })}
                      fullWidth
                      size="small"
                      error={!!errors.location}
                      helperText={errors.location?.message}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      label="date"
                      type="date"
                      variant="outlined"
                      {...register("date", { required: "date is required" })}
                      fullWidth
                      size="small"
                      error={!!errors.date}
                      helperText={errors.date?.message}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      sx={{ py: 1 }}
                      variant="contained"
                      fullWidth
                      component="label"
                    >
                      Upload Item Image
                      <input
                        {...register("image", {
                          required: "image is required",
                        })}
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

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      label="description"
                      multiline
                      variant="outlined"
                      {...register("description", {
                        required: "description is required",
                      })}
                      fullWidth
                      error={!!errors.description}
                      helperText={errors.description?.message}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  );
};

export default FoundItempage;
