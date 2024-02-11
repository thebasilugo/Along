import { Grid } from "@mui/material";
import Header from "../dashboard/Header";
import Content from "./Content";
const Blog = () => {
  return (
    <>
      <Grid item width={"100%"}>
        <Header />
        <Content />
      </Grid>
    </>
  );
};

export default Blog;
