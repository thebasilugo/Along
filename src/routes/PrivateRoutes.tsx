import { Routes, Route, Navigate } from "react-router-dom";
import { FC, lazy, useEffect } from "react";
const AllRoutes = lazy(() => import("../routes/Pages"));
import { useAppDispatch } from "../redux/store";
import { getUserDetails } from "../redux/slices/auth/auth.reducer";
import { Grid } from "@mui/material";

const PrivateRoutes: FC = () => {
  const dispatch = useAppDispatch();
  const storedUserData = localStorage.getItem("userData");
  // Check if storedUserData is not null before parsing
  const userData = storedUserData !== null ? JSON.parse(storedUserData) : null;

  useEffect(() => {
    // Dispatch only if userData is not null
    if (userData !== null) {
      dispatch(getUserDetails(userData));
    }
  }, [userData, dispatch]);

  return (
    <Routes>
      <Grid item container>
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/*" element={<AllRoutes />} />
      </Grid>
    </Routes>
  );
};

export default PrivateRoutes;
