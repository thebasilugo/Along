import { Routes, Route, Navigate } from "react-router-dom";
import { FC, lazy } from "react";
const AllRoutes = lazy(() => import("../routes/Pages"));

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<AllRoutes />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default PrivateRoutes;
