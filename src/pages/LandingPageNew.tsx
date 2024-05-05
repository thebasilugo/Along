import { Grid } from "@mui/material";
// import GarageIcon from "@mui/icons-material/Garage";
// import CustomButton from "../components/CustomButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";
// import BasicMenu from "./landing-page-component/Categories";
import HeroSection from "./landing-page-component/HeroSection";
import CarAndImages from "./landing-page-component/CarAndImages";
import NavBar from "./landing-page-component/NavBar";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../redux/store";
// import { SendTimeExtensionOutlined } from "@mui/icons-material";
// import SearchComponent from "../components/SearchComponent";
// import { useAppDispatch } from "../redux/store";
// import { logoutUser } from "../redux/slices/auth/auth.reducer";

const LandingPageNew = () => {
  // const { auth } = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();
  // const handleLogout = () => {
  //   dispatch(logoutUser());
  //   navigate("/login");
  // };
  // const navigate = useNavigate();
  return (
    <>
      <Grid
        item
        container
        sx={{
          width: "100%",
          height: "100vh",
          background: "linear-gradient(to right bottom, #fff, #add9c8)",
        }}
      >
        <Grid item width={"90%"} marginX={"auto"} flexDirection={"column"}>
          <NavBar />
          <HeroSection />
          <CarAndImages />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPageNew;
