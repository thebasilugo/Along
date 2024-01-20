import { Box, Typography, Button, Grid } from "@mui/material";
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
  console.log(user)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // background: "black",
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
    </Box>
  );
};

export default LandingPage;
{
  /* <Box
  sx={{
    width: "80%",
    marginX: "auto",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "1px solid red",
  }}
>
  <Box sx={{ width: "3rem", height: "3rem" }}>
    <Avatar
      src={logo}
      variant="square"
      sx={{
        height: "100%",
        width: "100%",
        objectFit: "contain",
      }}
    />
  </Box>
  <Stack
    width={"100%"}
    flexDirection={"row"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Typography variant="h5">Home</Typography>
    <Typography variant="h5">Blog</Typography>
    <Typography variant="h5">About</Typography>
    <Typography variant="h5">Menu</Typography>
  </Stack>
  <Box>
    <CustomButton
      title="Sign In"
      sx={{
        bgcolor: "#3A5B22",
        width: "100%",
        fontWeight: "600",
        fontSize: "1.2rem",
        textTransform: "initial",
        borderRadius: "1rem",
      }}
    />
  </Box>
</Box>; */
}
