"use server";

import { cookies } from "next/headers";

export const deleteCookies = (token: string) => {
  cookies().delete(token);
};
