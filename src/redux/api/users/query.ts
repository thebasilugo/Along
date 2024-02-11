import { api } from "../api";

export const userSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => ({
        url: `/user`,
      }),
      providesTags: ["user"],

      transformResponse: (response: any) => response,
    }),
  }),
});

// Destructure the generated endpoints
export const { useGetUsersQuery } = userSlice;
