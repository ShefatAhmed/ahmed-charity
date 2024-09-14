import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/v1/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/api/v1/users",
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: (updatedDonorsInfo) => ({
        url: `/api/auth/donors-user/${updatedDonorsInfo.email}`,
        method: "PUT",
        body: updatedDonorsInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useUpdateUserMutation, useGetAllUsersQuery } = authApi;
