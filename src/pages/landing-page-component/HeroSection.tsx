import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/store";
const HeroSection = () => {
  const { auth, user } = useAppSelector((state) => state.auth);
  return (
    <Grid
      item
      container
      flexDirection={"row"}
      justifyContent={"center"}
      width={"100%"}
      padding={2}
    >
      <Grid item>
        <Typography
          fontWeight={600}
          fontSize={{ xs: "3rem", sm: "6rem" }}
          textAlign={"center"}
          sx={{ color: "#01623b" }}
        >
          ALONG
        </Typography>
        <Typography
          fontWeight={600}
          fontSize={{ xs: "3rem", sm: "6rem" }}
          textAlign={"center"}
          sx={{ color: "#fff" }}
        >
          EVERYWHERE
        </Typography>
        {!auth && (
          <Typography
            fontWeight={600}
            fontSize={{ xs: "3rem", sm: "4rem" }}
            textAlign={"center"}
            sx={{ color: "#fff" }}
          >
            {auth ? user && user?.user_name : null}
   
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default HeroSection;
