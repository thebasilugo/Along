import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { Button, Typography, Grid } from "@mui/material";
import { SendTimeExtensionOutlined } from "@mui/icons-material";
import SearchComponent from "../../components/SearchComponent";
import GarageIcon from "@mui/icons-material/Garage";
import CustomButton from "../../components/CustomButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import BasicMenu from "./Categories";
const NavBar = () => {
  const { auth } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      {" "}
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
        <Grid item sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div>
            <GarageIcon
              sx={{
                fontSize: "5rem",
              }}
            />
          </div>
          <Typography variant="h5">Along Plug</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Grid item container flexDirection={"row"} gap={4}>
            <Grid item>
              <Link to={"/blog"}>
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
              <Link to={"#"}>
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
            <Grid item>
              <SearchComponent />
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
              onClick={() => navigate("/dashboard")}
              sx={{ backgroundColor: "#01623b" }}
            >
              Go to Dashboard
            </Button>
          ) : (
            <CustomButton
              title="Sign in"
              sx={{
                backgroundColor: "#01623b",
                textTransform: "initial",
                fontSize: "1.5rem",
              }}
              onClick={() => navigate("/auth/login")}
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
    </>
  );
};

export default NavBar;
