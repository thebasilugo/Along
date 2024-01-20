import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { api } from "./api";
import { RegisterResponse, LogInResponse } from "./type";

export const authSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LogInResponse, { email: string; password: string }>(
      {
        query: (body) => ({
          url: "/user/login",
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["user"],
        transformResponse: (response: LogInResponse) => response,
        transformErrorResponse: (error: FetchBaseQueryError) => error.data,
      }
    ),
    register: builder.mutation<
      RegisterResponse,
      { name: string; email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

// Destructure the generated endpoints
export const { useLoginMutation, useRegisterMutation } = authSlice;
