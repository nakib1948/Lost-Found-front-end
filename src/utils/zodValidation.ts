import { z } from "zod";

export const userRegistrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confrimPassword: z.string().min(6, "Password must be at least 6 characters"),
  bio: z.string().min(1, "Bio is required"),
  age: z.preprocess((value) => Number(value), z.number().min(0, "Age must be a non-negative number")),
  image: z
    .any()
   
});
