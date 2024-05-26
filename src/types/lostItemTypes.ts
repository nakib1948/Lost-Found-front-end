import { IUser } from "./common";

export interface ILostItem {
    createdAt: string; 
    date: string; 
    description: string;
    email: string;
    foundStatus: "NOTFOUND" | "FOUND"; 
    id: string; 
    image: string; 
    itemCategory: string;
    location: string;
    phone: string;
    updatedAt: string; 
    userId: string; 
    user: IUser
  }