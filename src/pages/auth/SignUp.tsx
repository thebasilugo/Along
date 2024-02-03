import {
  Typography,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { SignUpProps } from "../../utils/types";
import FormikControl from "../../components/validation/FormikControl";
import { useState, MouseEvent } from "react";
import { Apple, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import HorizontalTextDivider from "../../components/HorizontalTextDivider";
import { Link, useNavigate } from "react-router-dom";
import { SignUpSchema } from "../../components/validation/ValidationSchema";
import { useRegisterMutation } from "../../redux/api/authSlice";
import { toast, ToastContent } from "react-toastify";

const SignUp = () => {
  // const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const intialValues: SignUpProps = {
    name: "",
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
    terms_and_policy: false,
  };
  const handleSubmit = async (
    values: SignUpProps,
    { resetForm }: FormikHelpers<SignUpProps>
  ): Promise<void> => {
    const { name, email, password, user_name } = values;
    const payload = {
      name: name,
      user_name: user_name,
      email: email,
      password: password,
      account_type: "user",
    };
    const response = await register(payload);
    if ("data" in response) {
      // const { msg } = response.data;
      toast.success("sign-up successfull, kindly login now");
      navigate("/login");
      resetForm();
    }
    if ("error" in response) {
      //@ts-ignore
      const errMsg = response.error.data.msg;
      toast.error(errMsg as ToastContent);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item container flexDirection={"column"} gap={2}>
          <Grid item container flexDirection={"column"} gap={2}>
            <Grid item>
              <Typography variant="h3" color={"black"} fontWeight={600}>
                Get Started Now
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item sx={{ width: "100%" }}>
              <Formik
                initialValues={intialValues}
                onSubmit={handleSubmit}
                validationSchema={SignUpSchema}
              >
                <Form>
                  <Grid item container flexDirection={"column"} gap={3}>
                    <Grid item xs={12}>
                      <FormikControl name="user_name" placeholder="User Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <FormikControl name="name" placeholder="Full Name" />
                    </Grid>
                    <Grid item>
                      <FormikControl name="email" placeholder="Email" />
                    </Grid>
                    <Grid item>
                      <FormikControl
                        name="password"
                        type={!showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    {/* <Grid item>
                      <FormikControl
                        name="confirm_password"
                        type={!showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                      />
                    </Grid> */}
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Grid item>
                        <FormikControl
                          name="terms_and_policy"
                          control="checkbox"
                          label="I agree to the terms and policy"
                        />
                      </Grid>
                    </Grid>
                    <Grid item sx={{ marginBottom: "3rem" }}>
                      <CustomButton
                        type="submit"
                        title="Sign up"
                        sx={{
                          bgcolor: "#3A5B22",
                          width: "100%",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                          textTransform: "initial",
                          borderRadius: "1rem",
                        }}
                        isSubmitting={isLoading}
                      />
                    </Grid>
                  </Grid>

                  <HorizontalTextDivider text={"Or"} />
                  <Grid item container>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: "1rem",
                        justifyContent: "space-between",
                        marginY: "1rem",
                      }}
                    >
                      <Button
                        variant="outlined"
                        startIcon={<Google color="success" />}
                        sx={{
                          border: "1px solid #D9D9D9",
                          fontSize: "1rem",
                          borderRadius: "1rem",
                          color: "black",
                          textTransform: "initial",
                        }}
                      >
                        Sign in with Google
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Apple color="success" />}
                        sx={{
                          border: "1px solid #D9D9D9",
                          fontSize: "1rem",
                          borderRadius: "1rem",
                          color: "black",
                          textTransform: "initial",
                        }}
                      >
                        Sign in with Apple
                      </Button>
                    </Box>
                    <Box
                      width={"100%"}
                      sx={{ display: "flex", justifyContent: "center" }}
                      marginY={"1rem"}
                    >
                      <Typography variant="h6" fontWeight={400} color={"black"}>
                        Already have an account?{" "}
                      </Typography>
                      <Link to={"/login"}>
                        <Typography
                          variant="h6"
                          color={"blue"}
                          sx={{ paddingLeft: "0.5rem" }}
                        >
                          Sign In
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                </Form>
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
