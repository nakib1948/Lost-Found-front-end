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
          url: "/lost-item",
          method: "GET",
        };
      },
      providesTags: [allTagTypes.getLostItem],
    }),
    getAllLostItem: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/lost-item/getAllLostItem",
          method: "GET",
          params: arg,
        };
      },
      providesTags: [allTagTypes.getAllLostItem],
    }),
    updateLostItemStatus: build.mutation({
      query: (data) => {
        return {
          url: "/lost-item",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [allTagTypes.updateLostItemStatus],
    }),
  }),
});

export const {
  useCreateLostItemMutation,
  useGetLostItemQuery,
  useGetAllLostItemQuery,
  useUpdateLostItemStatusMutation
} = lostItemApi;
