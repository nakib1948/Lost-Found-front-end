"use server";

import { IUser } from "@/types/common";

export const registerUser = async (data: IUser) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
