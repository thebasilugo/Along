import { Typography, Grid } from "@mui/material";
import LineChart from "./LineChart";
const StatsGraph = () => {
  return (
    <>
      <Grid item container flexDirection={"column"} gap={2}>
        <Grid item>
          <Typography variant="h1" fontWeight={500}>
            Your Post Stats
          </Typography>
        </Grid>
        <Grid item>
          <LineChart />
        </Grid>
      </Grid>
    </>
  );
};

export default StatsGraph;
