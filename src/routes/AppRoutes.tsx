import App from "../App";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { useAppSelector } from "../redux/store";
const AuthPage = lazy(() => import("./AuthPage"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

const AppRoutes = () => {
  const { auth } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<App />}>
            {auth ? (
              <>
                <Route path="/*" element={<PrivateRoutes />} />
                <Route path="*" element={<Navigate to={"/*"} />} />
              </>
            ) : (
              <>
                <Route path="auth/*" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/auth" />} />
              </>
            )}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
