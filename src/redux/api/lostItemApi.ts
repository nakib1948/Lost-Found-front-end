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
    getLostItem: build.query({
      query: () => {
         return {
            url: '/lost-item',
            method: 'GET',
         };
      },
      providesTags: [allTagTypes.getLostItem],
   }),
  }),
});

export const { useCreateLostItemMutation,useGetLostItemQuery } = lostItemApi;
