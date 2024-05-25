import Modal from "@/Components/Modal/Modal";
import { tokenKey } from "@/constants/tokenKey";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/userApi";
import { imgUpload } from "@/services/imgUpload";
import userLogin from "@/services/userLogin";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  data: any;
  refetch: any;
};

const EditProfile = ({ open, setOpen, id, data, refetch }: TProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();
  const handleEditProfile = async (values: FieldValues) => {
    let imgUrl: string = data?.data?.image;
    if (values.image.length) {
      imgUrl = await imgUpload(values.image[0]);
    }
    const updateData = {
      name: values.name,
      email: values.email,
      bio: values.bio,
      age: Number(values.age),
      image: imgUrl,
    };
    try {
      const updateResponse = await updateMYProfile(updateData);
      if (updateResponse.data.success) {
        await localStorage.setItem(tokenKey, updateResponse.data.data.token);
        toast.success(updateResponse.data.message);
      } 
      await refetch();
      setOpen(false);
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Update Profile">
      <form onSubmit={handleSubmit(handleEditProfile)}>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                {...register("name")}
                fullWidth
                size="small"
                error={!!errors.name}
                defaultValue={data?.data.user.name}
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
                defaultValue={data?.data.user.email}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Age"
                type="number"
                variant="outlined"
                {...register("age")}
                fullWidth
                size="small"
                defaultValue={data?.data.age}
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth component="label">
                Upload Profile Picture
                <input {...register("image")} type="file" hidden />
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
                {...register("bio")}
                fullWidth
                defaultValue={data?.data.bio}
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
            Update
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default EditProfile;
