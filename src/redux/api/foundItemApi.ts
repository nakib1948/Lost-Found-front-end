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
    foundLostItem: build.query({
      query: () => {
         return {
            url: '/found-items/userFoundItem',
            method: 'GET',
         };
      },
      providesTags: [allTagTypes.foundLostItem],
   }),
    foundAllLostItem: build.query({
      query: (arg: Record<string, any>) => {
         return {
            url: '/found-items',
            method: 'GET',
            params: arg,
         };
      },
      providesTags: [allTagTypes.foundLostItem],
   }),
  }),
});

export const { useCreateFoundItemMutation, useFoundLostItemQuery, useFoundAllLostItemQuery } = foundItemApi;
