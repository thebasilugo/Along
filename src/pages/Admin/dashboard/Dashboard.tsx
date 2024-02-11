import { Grid } from "@mui/material";
import Header from "./Header";
import Welcome from "./Welcome";
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <Grid item width={"100%"}>
      <Header />
      <Welcome />
      <Footer />
    </Grid>
  );
};

export default Dashboard;
