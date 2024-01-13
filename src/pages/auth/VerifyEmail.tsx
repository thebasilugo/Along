import { Typography, Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import { Apple, Google } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import verifyEmail from "../../asset/mail2.json";
import OtpInput from "react-otp-input";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <Grid item container flexDirection={"column"} gap={2}>
        <Grid item>
          <Typography variant="h4" color={"black"} fontWeight={600}>
            We have sent you a confirmation tokken
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <Grid item container flexDirection={"column"} gap={2}>
          <Box>
            <Lottie
              animationData={verifyEmail}
              loop
              autoplay
              style={{ width: "275px", height: "300px" }}
            />
          </Box>

          <Grid item container>
            <Grid item marginY={2}>
              <Typography
                variant="h6"
                textAlign={"center"}
                color={"black"}
                fontWeight={400}
              >
                Kindly input confirmation tokken sent to{" "}
                <span style={{ fontWeight: "600" }}>lameda789@gmail.com</span>
              </Typography>
            </Grid>
            <Grid item>
              <Grid item container flexDirection={"column"} gap={3}>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  containerStyle={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                  }}
                  inputType="tel"
                  inputStyle={{
                    width: "48px",
                    height: "48px",
                    color: "#29292D",
                    borderRadius: "10px",
                    fontSize: "3rem",
                    border: "2px solid #B3B3B3",
                    outline: "none",
                    transition: "borderColor 200ms ease",
                  }}
                  shouldAutoFocus={true}
                  renderInput={(props, index) => (
                    <input
                      {...props}
                      id={`otp-input-${index}`}
                      className="input-style" // Add your custom class name
                    />
                  )}
                />
                <Grid item sx={{ marginBottom: "3rem" }}>
                  <CustomButton
                    title="Confirm"
                    sx={{
                      bgcolor: "#3A5B22",
                      width: "100%",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      textTransform: "initial",
                      borderRadius: "1rem",
                    }}
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default VerifyEmail;
