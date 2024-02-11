import { api } from "../api";
export const postSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<string, object>({
      query: (body) => ({
        url: "/post/",
        method: "post",
        body,
      }),
      invalidatesTags: ["post"],
      transformResponse: (response: { message: string }) => response.message,
    }),
    updatePost: builder.mutation<string, { postId?: string; body: object }>({
      query: ({ postId, body }) => ({
        url: `/${postId}`,
        method: "put",
        body,
      }),
      transformResponse: (response: { message: string }) => response.message,
      invalidatesTags: ["post"],
    }),
    deletePost: builder.mutation<string, string | undefined>({
      query: (postId) => ({
        url: `/${postId}`,
        method: "delete",
      }),
      transformResponse: (response: { message: string }) => response.message,
      invalidatesTags: ["post"],
    }),
  }),
});

// Destructure the generated endpoints
export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postSlice;
