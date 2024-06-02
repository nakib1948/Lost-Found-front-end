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
    getAllUser: build.query({
      query: () => {
        return {
          url: "/user",
          method: "GET",
        };
      },
      providesTags: [allTagTypes.getAllUser],
    }),
    updateMYProfile: build.mutation({
      query: (data) => {
        return {
          url: "/my-profile",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [allTagTypes.userUpdateProfile],
    }),
    updateStatus: build.mutation({
      query: (data) => {
        return {
          url: "/user",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [allTagTypes.updateStatus],
    }),
    updatePassword: build.mutation({
      query: (data) => {
        return {
          url: "/my-profile/change-password",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [allTagTypes.userUpdatePassword],
    }),
  }),
});

export const {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
  useUpdatePasswordMutation,
  useGetAllUserQuery,
  useUpdateStatusMutation
} = profileAPi;
