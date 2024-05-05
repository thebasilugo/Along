import { string, object, mixed, boolean } from "yup";
const acceptedImageFormats = ["image/jpeg", "image/png"];

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
  user_name: string().required("Required"),
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
  terms_and_policy: boolean().oneOf(
    [true],
    "Terms and conditions must be accepted"
  ),
});

export const CreatePostSchema = object({
  title: string().required("Required"),
  description: string().required("Required"),
  image: mixed()
    .test("fileSize", "File is too large. Maximum size is 8MB", (value) => {
      // If value is undefined or null, skip the test
      if (!value) return true;

      return (value as File).size <= 8 * 1024 * 1024; // 8MB limit
    })
    .test("fileType", "File must be a JPEG, PNG, or GIF", (value) => {
      // If value is undefined or null, skip the test
      if (!value) return true;

      return acceptedImageFormats.includes((value as File).type);
    })
    .required("Image Proof is Required"),
});
