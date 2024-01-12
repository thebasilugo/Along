import { Outlet, Route, Routes } from "react-router-dom";
import authBg from "../../src/asset/images/auth.png";
import { Avatar, Grid } from "@mui/material";
import { lazy } from "react";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const LogIn = lazy(() => import("../pages/auth/LogIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));

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
          width: "40%",
          mr: "auto",
          top: 0,
        }}
        alignItems={"center"}
        flex={1}
        p={0}
      >
        <Avatar
          src={authBg}
          variant="square"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: {
            sm: "60%",
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
            width: { xs: "90%" },
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
      </Route>
      <Route index element={<LandingPage />} />
    </Routes>
  );
};

export default AuthPage;
