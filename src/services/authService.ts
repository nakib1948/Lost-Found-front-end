import { tokenKey } from "@/constants/tokenKey";
import { decodedToken } from "@/utils/jwt";
import { checkAndRemoveExpiredToken } from "./checkAndRemoveExpiredToken";

export const storeUserInfo = async (token: string) => {
  if (!tokenKey || typeof window === "undefined") {
    return "";
  }
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
  const authToken: string | null = localStorage.getItem(tokenKey);
  if (authToken) {
    const checkExpiration = checkAndRemoveExpiredToken(authToken);
  }
  if (authToken) {
    return !!authToken;
  }
  return false;
};

export const removeUser = () => {
  if (!tokenKey || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(tokenKey);
};
