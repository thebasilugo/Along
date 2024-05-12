import App from "../App";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { useAppSelector } from "../redux/store";
const AuthPage = lazy(() => import("./AuthPage"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const LandingPageNew = lazy(() => import("../pages/LandingPageNew"));
const Parks = lazy(() => import("../pages/blog-categories/parks"));
const Blog = lazy(() => import("../pages/blog-categories/Blog"));
const GovernmentOfficies = lazy(
  () => import("../pages/blog-categories/governement-officies")
);
const Hotels = lazy(() => import("../pages/blog-categories/hotels"));
const Malls = lazy(() => import("../pages/blog-categories/malls"));
const ResturantAndCafes = lazy(
  () => import("../pages/blog-categories/resturants-and-cafe")
);
const ReadBlog = lazy(() => import("../pages/read-blog/Layout"));

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
            <Route path="/landing-page" element={<LandingPageNew />} />
            <Route path="/resturants" element={<ResturantAndCafes />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/malls" element={<Malls />} />
            <Route path="/parks" element={<Parks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/title/read" element={<ReadBlog />} />
            <Route
              path="/government-offices"
              element={<GovernmentOfficies />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
