import { allTagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const lostItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLostItem: build.mutation({
      query: (data) => ({
        url: "/lost-item",
        method: "POST",
        data,
      }),
      invalidatesTags: [allTagTypes.lostItem],
    }),
  }),
});

export const { useCreateLostItemMutation } = lostItemApi;
