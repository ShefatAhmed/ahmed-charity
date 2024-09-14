import { baseApi } from "../../api/baseApi";

const donatedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonated: builder.query({
      query: () => ({
        url: "/api/v1/donated",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDonatedQuery } = donatedApi;
