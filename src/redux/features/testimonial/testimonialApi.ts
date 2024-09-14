import { baseApi } from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/api/v1/testimonial",
        method: "POST",
        body: data,
      }),
    }),
    getAllTestimonial: builder.query({
      query: () => ({
        url: "/api/v1/testimonials",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddTestimonialMutation, useGetAllTestimonialQuery } =
  testimonialApi;
