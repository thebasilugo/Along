import {
  Typography,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import { ResetPassWordProps } from "../../utils/types";
import FormikControl from "../../components/validation/FormikControl";
import { useState, MouseEvent } from "react";
import { Apple, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import HorizontalTextDivider from "../../components/HorizontalTextDivider";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const intialValues: ResetPassWordProps = {
    tokken: "",
    new_password: "",
    confirm_new_password: "",
  };
  const handleSubmit = (values: ResetPassWordProps) => {
    console.log(values);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: { xs: "2rem", sm: "4rem" },
          marginTop: "10rem",
        }}
      >
        <Grid item container flexDirection={"column"} gap={2}>
          <Grid item container flexDirection={"column"} gap={2}>
            <Grid item>
              <Typography variant="h3" color={"black"} fontWeight={600}>
                Reset Password
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
              <Formik initialValues={intialValues} onSubmit={handleSubmit}>
                <Form>
                  <Grid item container flexDirection={"column"} gap={3}>
                    <Grid item container>
                      <Grid item xs={12}>
                        <FormikControl name="tokken" placeholder="Tokken" />
                      </Grid>
                    </Grid>
                    <Grid item>
                      <FormikControl
                        name="new_password"
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
                    <Grid item>
                      <FormikControl
                        name="confirm_new_password"
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
                    </Grid>

                    <Grid item sx={{ marginBottom: "3rem" }}>
                      <CustomButton
                        title="Reset"
                        sx={{
                          bgcolor: "#3A5B22",
                          width: "100%",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                          textTransform: "initial",
                          borderRadius: "1rem",
                        }}
                        onClick={() => navigate("/verify-email")}
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

export default ResetPassword;
