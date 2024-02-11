import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer
        style={{ fontSize: "1.6rem" }}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </>
);
