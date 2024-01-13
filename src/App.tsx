import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";
import LoadingAnimation from "./components/LoadingComponent";
import ErrorFallback from "./components/layout/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import muiTheme from "./muiTheme";

function App() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={muiTheme}>
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
    </ThemeProvider>
  );
}

export default App;
