import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonation: builder.mutation({
      query: (newData) => ({
        url: "/api/v1/create-donation",
        method: "POST",
        body: newData,
      }),
    }),
    getAllDonation: builder.query({
      query: () => ({
        url: "/api/v1/donation",
        method: "GET",
      }),
    }),
    updateDonation: builder.mutation({
      query: ({ donationId, newData }) => ({
        url: `/api/v1/donation/${donationId}`,
        method: "PUT",
        body: newData,
      }),
    }),
    deleteDonation: builder.mutation({
      query: (donationId: string) => ({
        url: `/api/v1/donation/${donationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateDonationMutation,
  useGetAllDonationQuery,
  useUpdateDonationMutation,
  useDeleteDonationMutation,
} = donationApi;
