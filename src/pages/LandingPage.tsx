import { Typography, Button, Grid } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../asset/animatedImages/coming_soon.json";
import loginAnimation from "../asset/animatedImages/login.json";
import { useNavigate } from "react-router-dom";
// import logo from "../asset/landing-page-icons/logo.png";
// import CustomButton from "../components/CustomButton";
import { SendTimeExtensionOutlined } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { logoutUser } from "../redux/slices/auth/auth.reducer";

const LandingPage = () => {
  const { auth, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <>
      <Grid
        item
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid
          item
          container
          padding={2}
          xs={12}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: "2rem",
          }}
        >
          <Grid item>
            <Lottie
              animationData={auth ? loginAnimation : animationData}
              loop
              autoplay
              style={{ width: "300px", height: "300px" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ paddingRight: "1rem" }}>
              {auth
                ? `Looks like you are logged in, ${user?.user_name}`
                : "You haven't logged in yet, please go and check the authentication screen"}
            </Typography>
          </Grid>
          <Grid item>
            {auth ? (
              <Button
                variant="contained"
                endIcon={<SendTimeExtensionOutlined />}
                onClick={handleLogout}
              >
                Log out
              </Button>
            ) : (
              <Button
                variant="contained"
                endIcon={<SendTimeExtensionOutlined />}
                onClick={() => navigate("/login")}
              >
                Go to auth
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
