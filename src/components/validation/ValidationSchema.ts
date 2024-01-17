import { string, object } from "yup";

export const LoginSchema = object({
  email: string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: string()
    .required("Required")
    .min(8, "password too short")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
});

export const SignUpSchema = object({
  name: string().required("Required"),
  email: string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: string()
    .required("Required")
    .min(8, "password too short")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
});
