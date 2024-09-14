import { baseApi } from "../../api/baseApi";

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUser) => ({
        url: "/api/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
