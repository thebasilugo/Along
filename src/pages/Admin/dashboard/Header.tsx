import { Grid, Typography } from "@mui/material";
import SearchComponent from "../../../components/SearchComponent";
// import carImage from "../../../asset/landing-page-icons/car.png";
import GarageIcon from "@mui/icons-material/Garage";

const Header = () => {
  return (
    <>
      <Grid item container gap={2}>
        <Grid item xs={9}>
          <SearchComponent />
        </Grid>
        <Grid item xs={2}>
          {/* <Grid
          item
          sx={{
            height: "10rem",
            width: "10rem",
          }}
        >
          <img
            src={carImage}
            alt="logo"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Grid> */}
          <Grid item container flexDirection={"row"} alignItems={"center"}>
            <GarageIcon
              sx={{
                fontSize: "5rem",
              }}
            />
            <Typography fontWeight={600}>ALONG</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
