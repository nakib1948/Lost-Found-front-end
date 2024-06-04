"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { imgUpload } from "@/services/imgUpload";
import { toast } from "sonner";
import CssBaseline from "@mui/material/CssBaseline";
import { useForm, FieldValues, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { getUserInfo } from "@/services/authService";
import HeaderSection from "@/Components/HeaderSection/HeaderSection";
import { useCreateFoundItemMutation } from "@/redux/api/foundItemApi";
import Navbar from "@/Components/shared/Navbar/Navbar";
import Footer from "@/Components/shared/Footer/Footer";
const defaultTheme = createTheme();
const FoundItempage = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
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
      district: values.district,
      email: user.email,
      phone: values.phone,
      image: imgUrl,
    };
    try {
      const res = await createFoundItem(data);

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <Navbar />
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
                        helperText={errors.foundItemName?.message as string}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.itemCategory}>
                        <InputLabel id="demo-simple-select-label">
                          Item Category
                        </InputLabel>
                        <Controller
                          name="itemCategory"
                          control={control}
                          defaultValue=""
                          rules={{ required: "itemCategory is required" }}
                          render={({ field }) => (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              size="small"
                              label="itemCategory"
                              {...field}
                              fullWidth
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Phone"}>Phone</MenuItem>
                              <MenuItem value={"Watch"}>Watch</MenuItem>
                              <MenuItem value={"Walet"}>Walet</MenuItem>
                              <MenuItem value={"Money"}>Money</MenuItem>
                              <MenuItem value={"Document"}>Document</MenuItem>
                              <MenuItem value={"Instrument"}>
                                Instrument
                              </MenuItem>
                            </Select>
                          )}
                        />
                        <FormHelperText>
                          {errors.itemCategory?.message as string}
                        </FormHelperText>
                      </FormControl>
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
                        helperText={errors.phone?.message as string}
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
                        helperText={errors.location?.message as string}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.district}>
                        <InputLabel id="demo-simple-select-label">
                          District
                        </InputLabel>
                        <Controller
                          name="district"
                          control={control}
                          defaultValue=""
                          rules={{ required: "district is required" }}
                          render={({ field }) => (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              size="small"
                              label="district"
                              {...field}
                              fullWidth
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Chittagong"}>
                                Chittagong
                              </MenuItem>
                              <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
                              <MenuItem value={"Khulna"}>Khulna</MenuItem>
                              <MenuItem value={"Rajsahi"}>Rajsahi</MenuItem>
                              <MenuItem value={"Borisal"}>Borisal</MenuItem>
                              <MenuItem value={"sylet"}>sylet</MenuItem>
                            </Select>
                          )}
                        />
                        <FormHelperText>
                          {errors.district?.message as string}
                        </FormHelperText>
                      </FormControl>
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
                        helperText={errors.date?.message as string}
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
                          {errors.image.message as string}
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
                        helperText={errors.description?.message as string}
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
      <Footer />
    </>
  );
};

export default FoundItempage;
