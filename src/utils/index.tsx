// export const errorMessage = (err: unknown): string | undefined => {
//     let message;
//     if (isFetchBaseQueryError(err)) {
//       //@ts-expect-error beause
//       message = 'error' in err ? err.error : err?.data.message ? err.data.message : JSON.stringify(err.data);
//     } else if (isErrorWithMessage(err)) {
//       message = err.message;
//     }
//     return message;
//   };