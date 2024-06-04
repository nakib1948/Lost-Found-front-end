import { allTagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const claimApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClaim: build.mutation({
      query: (data) => ({
        url: "/claims",
        method: "POST",
        data,
      }),
      invalidatesTags: [allTagTypes.createClaim],
    }),
    getClaimItem: build.query({
      query: () => {
        return {
          url: "/claims",
          method: "GET",
        };
      },
      providesTags: [allTagTypes.getClaimItem],
    }),
    getSingleProductClaim: build.query({
      query: (id) => {
        return {
          url: `/claims/${id}`,
          method: "GET",
        };
      },
    }),
    updateClaimStatus: build.mutation({
      query: (data) => {
         return {
            url: '/claims',
            method: 'PATCH',
            data,
         };
      },
      invalidatesTags: [allTagTypes.updateClaimStatus],
   }),
  }),
});

export const {
  useCreateClaimMutation,
  useGetClaimItemQuery,
  useGetSingleProductClaimQuery,
  useUpdateClaimStatusMutation
} = claimApi;
