import { api } from "../api";

export const postSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query<any, void>({
      query: () => ({
        url: `/post`,
      }),
      providesTags: ["post"],

      transformResponse: (response: any) => response,
    }),
    getUserPost: builder.query<any, { email: string }>({
      query: (body) => ({
        url: `/post/usersPosts`,
        body,
      }),
      providesTags: ["post"],

      transformResponse: (response: any) => response,
    }),
  }),
});

// Destructure the generated endpoints
export const { useGetPostQuery, useGetUserPostQuery } = postSlice;
