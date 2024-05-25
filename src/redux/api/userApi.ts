import { allTagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const profileAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMYProfile: build.query({
      query: () => {
        return {
          url: "/my-profile",
          method: "GET",
        };
      },
      providesTags: [allTagTypes.userProfile],
    }),
    updateMYProfile: build.mutation({
        query: (data) => {
           return {
              url: '/my-profile',
              method: 'PATCH',
              data,
           };
        },
        invalidatesTags: [allTagTypes.userUpdateProfile],
     }),
    updatePassword: build.mutation({
        query: (data) => {
           return {
              url: '/my-profile/change-password',
              method: 'PATCH',
              data,
           };
        },
        invalidatesTags: [allTagTypes.userUpdatePassword],
     }),
  }),
});

export const { useGetMYProfileQuery, useUpdateMYProfileMutation,useUpdatePasswordMutation } = profileAPi;
