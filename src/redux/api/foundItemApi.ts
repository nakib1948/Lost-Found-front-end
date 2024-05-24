import { allTagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const foundItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFoundItem: build.mutation({
      query: (data) => ({
        url: "/found-items",
        method: "POST",
        data,
      }),
      invalidatesTags: [allTagTypes.foundItem],
    }),
  }),
});

export const { useCreateFoundItemMutation } = foundItemApi;
