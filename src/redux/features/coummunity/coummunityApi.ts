import { baseApi } from "../../api/baseApi";

const coummunityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (data) => ({
        url: "/api/v1/comment",
        method: "POST",
        body: data,
      }),
    }),
    getAllComments: builder.query({
      query: () => ({
        url: "/api/v1/comments",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCommentsQuery, useAddCommentMutation } = coummunityApi;
