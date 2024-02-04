import { Button, Grid, Typography } from "@mui/material";
import GarageIcon from "@mui/icons-material/Garage";
import CustomButton from "../components/CustomButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import BasicMenu from "./landing-page-component/Categories";
import HeroSection from "./landing-page-component/HeroSection";
import CarAndImages from "./landing-page-component/CarAndImages";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { SendTimeExtensionOutlined } from "@mui/icons-material";
import { useAppDispatch } from "../redux/store";
import { logoutUser } from "../redux/slices/auth/auth.reducer";

const LandingPageNew = () => {
  const { auth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  const navigate = useNavigate();
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
          <Grid
            item
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            padding={2}
            marginTop={2}
          >
            <Grid
              item
              sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <GarageIcon
                sx={{
                  fontSize: "5rem",
                }}
              />
              <Typography variant="h5">Along Plug</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Grid item container flexDirection={"row"} gap={9}>
                <Grid item>
                  <Link to={"/"}>
                    <Button
                      sx={{
                        textTransform: "initial",
                        fontSize: "1.4rem",
                        color: "black",
                      }}
                    >
                      Blog
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/"}>
                    <Button
                      sx={{
                        textTransform: "initial",
                        fontSize: "1.4rem",
                        color: "black",
                      }}
                    >
                      About
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <BasicMenu />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              //   sx={{
              //     display: { xs: "none", sm: "block" },
              //   }}
            >
              {auth ? (
                <Button
                  variant="contained"
                  endIcon={<SendTimeExtensionOutlined />}
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              ) : (
                <CustomButton
                  title="Sign in"
                  sx={{
                    backgroundColor: "#01623b",
                    textTransform: "initial",
                    fontSize: "1.5rem",
                  }}
                  onClick={() => navigate("/login")}
                />
              )}
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: "none" },
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: "3rem",
                }}
              />
            </Grid>
          </Grid>
          <HeroSection />
          <CarAndImages />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPageNew;
