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
          url: `/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: [allTagTypes.getSingleProductClaim],
    }),
  }),
});

export const {
  useCreateClaimMutation,
  useGetClaimItemQuery,
  useGetSingleProductClaimQuery,
} = claimApi;
