import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const AdminDrawer = lazy(() => import("../components/layout/Drawer"));
const AdminDashboard = lazy(() => import("../pages/Admin/Dashboard"));

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminDrawer />}>
        <Route path="auth/*" element={<Navigate to="/" />} />
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
