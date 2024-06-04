"use server";

import { IUsers } from "@/types/common";

export const registerUser = async (data: IUsers) => {
  const res = await fetch(`https://lost-and-found-system-iota.vercel.app/api/user/register`, {
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
