import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import LoadingAnimation from "./components/LoadingComponent";
import ErrorFallback from "./components/layout/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const navigate = useNavigate();
  return (
    <Grid item container>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <Suspense fallback={<LoadingAnimation />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Grid>
  );
}

export default App;
