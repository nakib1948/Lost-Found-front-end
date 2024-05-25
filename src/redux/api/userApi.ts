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
  }),
});

export const { useGetMYProfileQuery } = profileAPi;
