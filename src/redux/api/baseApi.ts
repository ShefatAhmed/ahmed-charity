import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ahmed-charity-backend.vercel.app",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
