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
    addDonationReview: builder.mutation({
      query: ({ donationId, reviewData }) => ({
        url: `/api/v1/donation/${donationId}/review`,
        method: "POST",
        body: reviewData,
      }),
    }),
    getDonationReviews: builder.query({
      query: (donationId) => ({
        url: `/api/v1/donation/${donationId}/reviews`,
        method: "GET",
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
  useAddDonationReviewMutation,
  useGetDonationReviewsQuery
} = donationApi;
