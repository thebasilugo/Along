import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const AdminDrawer = lazy(() => import("../components/layout/Drawer"));
const AdminDashboard = lazy(() => import("../pages/Admin/dashboard/Dashboard"));
const Blog = lazy(() => import("../pages/Admin/blog/Blog"));
const NotFound = lazy(() => import("../pages/Not-found/NotFound"));
const Stats = lazy(() => import("../pages/Admin/stats"));
const CreatePost = lazy(() => import("../pages/Admin/post/Post"));
const Settings = lazy(() => import("../pages/Admin/settings"));

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminDrawer />}>
        <Route path="auth/*" element={<Navigate to="/" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="blog" element={<Blog />} />
        <Route path="settings" element={<Settings />} />
        <Route path="stats" element={<Stats />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route index element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
