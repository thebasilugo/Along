import { Routes, Route, Navigate } from "react-router-dom";
import { FC, lazy, useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { getUserDetails } from "../redux/slices/auth/auth.reducer";

const AllRoutes = lazy(() => import("../routes/Pages"));

const PrivateRoutes: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    if (userData) {
      dispatch(getUserDetails(userData));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/*" element={<AllRoutes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PrivateRoutes;
