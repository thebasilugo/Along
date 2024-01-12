import Lottie from "lottie-react";
import animationData from "../asset/animation_ll9cfvkm.json";
import { Grid, Typography } from "@mui/material";
const LoadingAnimation = () => {
  return (
    <Grid
      item
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
      <Typography variant="h2" color={"primary"}>
        ALONG PLUG
      </Typography>
    </Grid>
  );
};

export default LoadingAnimation;
