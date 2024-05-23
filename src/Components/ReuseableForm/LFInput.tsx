import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
    name: string;
    label?: string;
    type?: string
    size?: "small" | "medium";
    fullWidth?:boolean;
    sx?:SxProps;
    placeholder?:String;
    required?:boolean
}

const LFInput = ({ name, label, type="text", size="small", fullWidth,sx,placeholder,required }:TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field,fieldState:{error} }) => (
        <TextField
        {...field}
          label={label}
          sx={{...sx}}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default LFInput;
