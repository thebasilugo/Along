import { Grid } from "@mui/material";
import Header from "./Header";
import Welcome from "./Welcome";
import Footer from "./Footer";
import { getUserType } from "../../../utils";
// import TeamCard from "../post/TeamCard";
const Dashboard = () => {
  const accountType = getUserType();
  return (
    <Grid item width={"100%"}>
      <Header />
      <Welcome />
      {accountType === "admin" && <Footer />}
    </Grid>
  );
};

export default Dashboard;
