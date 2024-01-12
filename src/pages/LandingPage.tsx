import { Typography, Box, Button } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../asset/coming_soon.json";
import { useNavigate } from "react-router-dom";
import { SendTimeExtensionOutlined } from "@mui/icons-material";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />
      <Typography variant="h4" sx={{ paddingRight: "1rem" }}>
        Coming sooner than you think!!!
      </Typography>
      <Button
        variant="contained"
        endIcon={<SendTimeExtensionOutlined />}
        onClick={() => navigate("/login")}
      >
        check out our login page
      </Button>
    </Box>
  );
};

export default LandingPage;
