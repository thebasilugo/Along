import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface Options {
  long_name: string;
  id: string;
  short_name: string;
  phone_code: string;
}

export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  return token;
};

export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

// export const errorMessage = (err: unknown): string | undefined => {
//   let message;
//   if (isFetchBaseQueryError(err)) {
//     //@ts-expect-error beause
//     message =
//       "error" in err
//         ? err.error
//         : err?.data.message
//         ? err.data.message
//         : JSON.stringify(err.data);
//   } else if (isErrorWithMessage(err)) {
//     message = err.message;
//   }
//   return message;
// };

export const formatDateTime = (
  dateTimeString: string,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Date(dateTimeString).toLocaleString("en-US", mergedOptions);
};

type IType = "blogger" | "user" | "admin";

export const getUserType = (): IType | null => {
  return localStorage.getItem("loginUserType") as IType;
};

// export const errorMessage = (err: unknown): string | undefined => {
//   let message;
//   if (isFetchBaseQueryError(err)) {
//     //@ts-expect-error beause
//     message =
//       "error" in err
//         ? err.error
//         : err?.data.message
//         ? err.data.message
//         : JSON.stringify(err.data);
//   } else if (isErrorWithMessage(err)) {
//     message = err.message;
//   }
//   return message;
// };
