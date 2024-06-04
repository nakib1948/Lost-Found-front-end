"use server";
import setTokenToCookie from "@/utils/setTokenToCookie";
import { FieldValues } from "react-hook-form";

const userLogin = async (data: FieldValues) => {
  const res = await fetch(`https://lost-and-found-system-iota.vercel.app/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  if (userInfo.data.token) {
    setTokenToCookie(userInfo.data.token);
  }
  return userInfo;
};

export default userLogin;
