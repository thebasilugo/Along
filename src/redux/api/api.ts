import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { endpoint, getState }) => {
    const {
      auth: { verifyUserToken, authToken, session },
    } = getState() as RootState;
    headers.append("Accept", "application/json");
    if (endpoint === "verifyEmail") {
      headers.append("AUTHORIZATION", `${verifyUserToken}`);
    }
    if (authToken) {
      headers.append("AUTHORIZATION", `${authToken || session}`);
    }
  },
});

export const api = createApi({
  baseQuery,
  tagTypes: ["user", "post", "users"],
  endpoints: () => ({}),
});
// if (
//   endpoint === "createPost" ||
//   endpoint === "updatePost" ||
//   endpoint === "deletePost"
// ) {
//   headers.append("AUTHORIZATION", `Bearer ${session}`);
// }