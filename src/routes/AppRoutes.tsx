import App from "../App";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
const AuthPage = lazy(() => import("./AuthPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<App />}>
            <>
              <Route path="/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
