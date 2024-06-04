import Modal from "@/Components/Modal/Modal";
import { useCreateClaimMutation } from "@/redux/api/claimApi";
import { imgUpload } from "@/services/imgUpload";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const ClaimModal = ({ open, setOpen, data }: TProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  const [createClaim] = useCreateClaimMutation();
  const handleCreateClaim = async (values: FieldValues) => {
    const imgUrl = await imgUpload(values.imageProf[0]);
    const claimData = {
      foundItemId: data.id,
      imageProf: imgUrl,
      phone: values.phone,
      lostDate: values.lostDate,
      claimRequest: values.claimRequest,
    };
    try {
      const res = await createClaim(claimData);
  
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        setOpen(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Claim Request">
      <form onSubmit={handleSubmit(handleCreateClaim)}>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="phone"
                variant="outlined"
                {...register("phone")}
                fullWidth
                size="small"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth component="label">
                Upload Item Picture as Prof
                <input {...register("imageProf")} type="file" hidden />
              </Button>
              {errors.imageProf && (
                <small className="text-red-500" role="alert">
                  {errors.imageProf.message}
                </small>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Lost Date"
                type="date"
                variant="outlined"
                {...register("lostDate", { required: "date is required" })}
                fullWidth
                size="small"
                error={!!errors.lostDate}
                helperText={errors.lostDate?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Claim Request"
                placeholder="describe where,when your item lost and proof"
                multiline
                variant="outlined"
                {...register("claimRequest", {
                  required: "description is required",
                })}
                fullWidth
                error={!!errors.claimRequest}
                helperText={errors.claimRequest?.message}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Request
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default ClaimModal;
