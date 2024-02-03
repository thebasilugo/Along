import { Link, Outlet, Route, Routes } from "react-router-dom";
import authBg from "../../src/asset/images/auth.png";
import { Avatar, Grid } from "@mui/material";
import { lazy } from "react";
import LandingPageNew from "../pages/LandingPageNew";
// const LandingPage = lazy(() => import("../pages/LandingPage"));
const LogIn = lazy(() => import("../pages/auth/LogIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassWord"));
const VerifyEmail = lazy(() => import("../pages/auth/VerifyEmail"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));

const AuthLayout = () => {
  return (
    <Grid
      item
      container
      sx={{
        py: 0,
        position: "relative",
        minHeight: "100vh",
        color: "text.primary",
        overflowY: { sm: "auto" },
      }}
    >
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "flex" },
          overflowY: { sm: "hidden" },
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "50%",
          mr: "auto",
          top: 0,
        }}
        alignItems={"center"}
        flex={1}
        p={0}
      >
        <Link to={"/"}>
          <Avatar
            src={authBg}
            variant="square"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: {
            sm: "50%",
          },
          height: "100%",
          bottom: 0,
          right: 0,
          width: "100%",
        }}
      >
        <Grid
          item
          sx={{
            width: { xs: "80%" },
            mx: "auto",
            height: "100%",
            p: { md: 5, sm: 2, xs: 3 },
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

const AuthPage = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LogIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route index element={<LandingPageNew />} />
    </Routes>
  );
};

export default AuthPage;
