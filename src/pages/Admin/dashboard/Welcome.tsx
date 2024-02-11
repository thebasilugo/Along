import { Box, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CustomButton from "../../../components/CustomButton";
import dashImage from "../../../asset/dashboard/frameDashboard.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/blog");
  };
  return (
    <Grid item container marginTop={8} gap={2}>
      <Grid item xs={12} sm={7}>
        <Grid item container gap={6}>
          <Grid item>
            <Typography fontWeight={600} variant="h1" sx={{ fontSize: "3rem" }}>
              Welcome to A
              <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>long</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" fontWeight={400}>
              With along you get to explore abuja more without breaking the bank
              on transportation fees, with just a click of a button you can have
              access to different route to visit places, experience new
              enviroment and culture.
            </Typography>
          </Grid>
          <Grid item>
            <CustomButton
              title="Take a Tour in Along"
              endIcon={<ShoppingCartIcon />}
              sx={{
                paddingX: "2rem",
                paddingY: "1rem",
                textTransform: "initial",
                fontSize: "1.2rem",
                bgcolor: "#323a4d",
              }}
              onClick={handleNavigate}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ height: "30rem", width: "25rem" }}>
          <img
            src={dashImage}
            alt="dashImage"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Welcome;
