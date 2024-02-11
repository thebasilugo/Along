import { Grid } from "@mui/material";
import Header from "../dashboard/Header";
import CreatePost from "./CreatePost";
import PublishedPost from "./PublishedPost";

const Post = () => {
  return (
    <>
      <Grid item width={"100%"}>
        <Header />
        <CreatePost />
        <PublishedPost />
      </Grid>
    </>
  );
};

export default Post;
