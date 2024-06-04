import { tokenKey } from "@/constants/tokenKey";
import { decodedToken } from "@/utils/jwt";
import { JwtPayload } from "jwt-decode";

const TOKEN_KEY = "token";

export const checkAndRemoveExpiredToken = (token: string) => {
  if (token) {
    const decoded: JwtPayload = decodedToken(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp !== undefined && decoded.exp < currentTime) {
      localStorage.removeItem(tokenKey);
    }
  }
};
