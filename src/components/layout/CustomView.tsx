import { Grid } from "@mui/material";

const CustomView = ({ children }: any) => {
  return (
    <Grid item container width={"98%"} marginX={"auto"} height={"100%"}>
      {children}
    </Grid>
  );
};

export default CustomView;
