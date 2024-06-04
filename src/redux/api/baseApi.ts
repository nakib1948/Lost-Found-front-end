import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { allTagList } from "../tagTypes";
import { axiosBaseQuery } from "@/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: " https://lost-and-found-system-iota.vercel.app/api" }),
  endpoints: () => ({}),
  tagTypes:allTagList
});