import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAVolunteer: builder.mutation({
      query: (data) => ({
        url: "/api/v1/volunteer",
        method: "POST",
        body: data,
      }),
    }),
    getAllVolunteer: builder.query({
      query: () => ({
        url: "/api/v1/volunteers",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddAVolunteerMutation, useGetAllVolunteerQuery } =
  volunteerApi;
