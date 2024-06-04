import { tokenKey } from "@/constants/tokenKey";
import { IErrorInfo, IResponseInfo } from "@/types/common";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 80000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem(tokenKey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: IResponseInfo = {
      data: response?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const responseObject: IErrorInfo = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong!!!",
      errorMessages: error?.response?.data?.message,
    };

    return responseObject;
  }
);

export { instance };
