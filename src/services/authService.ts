import { tokenKey } from "@/constants/tokenKey";
import { decodedToken } from "@/utils/jwt";

export const storeUserInfo = async (token:string) => {
 
  console.log(token)
  return localStorage.setItem(tokenKey, token);
};

export const getUserInfo = () => {
  if (!tokenKey || typeof window === "undefined") {
    return "";
  }
  const authToken = localStorage.getItem(tokenKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);

    return {
      ...decodedData,
      role: decodedData?.role,
    };
  }
};

export const isLoggedIn = () => {
  if (!tokenKey || typeof window === "undefined") {
    return "";
  }
  const authToken = localStorage.getItem(tokenKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  if (!tokenKey || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(tokenKey);
};
