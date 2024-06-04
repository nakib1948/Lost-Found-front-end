import { tokenKey } from "@/constants/tokenKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setTokenToCookie = (token: string) => {
  cookies().set(tokenKey, token);
};

export default setTokenToCookie;
