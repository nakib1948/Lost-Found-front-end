import { ROLE } from "@/constants/role";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};
export type IErrorInfo = {
  statusCode: number;
  message: string;
  errorMessages: IErrorMessage;
};

export type IErrorMessage = {
  path: string | number;
  message: string;
};
export type IResponseInfo = {
  data: any;
  meta?: IMeta;
};
export const Gender = ["MALE", "FEMALE"];

interface IProfile {
  bio: string;
  age: number;
  image: string;
}

export interface IUsers {
  name: string;
  email: string;
  password: string;
  profile: IProfile;
}
export type Role = keyof typeof ROLE;

 export interface IUser {
  createdAt: string; 
  email: string;
  id: string; 
  name: string;
  updatedAt: string; 
}
