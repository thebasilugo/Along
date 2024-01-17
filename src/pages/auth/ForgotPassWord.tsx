import { Typography, Box, Grid, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { ForgotPassWordProps } from "../../utils/types";
import FormikControl from "../../components/validation/FormikControl";
import { Apple, Google } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import forgotAnimation from "../../asset/animatedImages/forgotPassword.json";
import { useNavigate } from "react-router-dom";

const ForgotPassWord = () => {
  const navigate = useNavigate();
  const intialValues: ForgotPassWordProps = {
    email: "",
  };
  const handleSubmit = (values: ForgotPassWordProps) => {
    console.log(values);
  };
  return (
    <>
      <Grid item container flexDirection={"column"} gap={2}>
        <Grid item sx={{ width: "100%" }}>
          <Typography
            variant="h4"
            color={"black"}
            fontWeight={600}
            textAlign={"center"}
          >
            Forgot Your Password ? Don't fuss we have got you!
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "5rem",
        }}
      >
        <Grid
          item
          container
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Box
            sx={{
              width: "100%",
              height: "300px",
            }}
          >
            <Lottie
              animationData={forgotAnimation}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Grid
            item
            container
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Grid item>
              <Typography
                variant="h6"
                textAlign={"center"}
                color={"black"}
                fontWeight={400}
              >
                Enter the email you signed-up with to reset you account
                password.
              </Typography>
            </Grid>
            <Grid item>
              <Formik initialValues={intialValues} onSubmit={handleSubmit}>
                <Form>
                  <Grid item container flexDirection={"column"} gap={3}>
                    <Grid item>
                      <FormikControl name="email" placeholder="Email address" />
                    </Grid>
                    <Grid item sx={{ marginBottom: "3rem" }}>
                      <CustomButton
                        title="Submit"
                        sx={{
                          bgcolor: "#3A5B22",
                          width: "100%",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                          textTransform: "initial",
                          borderRadius: "1rem",
                        }}
                        onClick={() => navigate("/reset-password")}
                      />
                    </Grid>
                  </Grid>
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

export default ForgotPassWord;
