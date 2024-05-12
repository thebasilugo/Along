import {
  Typography,
  Grid,
  CardContent,
  Card,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import SearchComponent from "../../../components/SearchComponent";
import { ShareOutlined } from "@mui/icons-material";
import CustomButton from "../../../components/CustomButton";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid item container flexDirection={"column"} gap={3} marginY={2}>
        <Grid item>
          <Typography textAlign={"center"} fontSize={"3rem"}>
            Explore
          </Typography>
        </Grid>
        <Grid item>
          <Grid item container flexDirection={"column"} gap={1} xs={12}>
            <Grid item xs={4}>
              <SearchComponent />
            </Grid>
            <Grid item xs={12}>
              <Grid item container xs={12} gap={1.9}>
                <Grid item xs={2.9}>
                  <Card sx={{ width: "100%" }}>
                    <CardMedia
                      sx={{ height: 350 }}
                      image={
                        "https://lh5.googleusercontent.com/p/AF1QipN4kDlYdeDffguIDJZ-csXyObZ3fz1OOAtzZNYC"
                      }
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                      >
                        Jevinik Resturant
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a dummy description, this is a sample
                        description, this is what tells you what the finished
                        resukt will look like.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        endIcon={<ShareOutlined />}
                        sx={{ backgroundColor: "#01623b" }}
                      >
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#01623b" }}
                        onClick={() => navigate("/blog/title/read")}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={2.9}>
                  <Card sx={{ width: "100%" }}>
                    <CardMedia
                      sx={{ height: 350 }}
                      image={
                        "https://lh5.googleusercontent.com/p/AF1QipN4kDlYdeDffguIDJZ-csXyObZ3fz1OOAtzZNYC"
                      }
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                      >
                        Duo Resturant
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a dummy description, this is a sample
                        description, this is what tells you what the finished
                        resukt will look like.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        endIcon={<ShareOutlined />}
                        sx={{ backgroundColor: "#01623b" }}
                      >
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#01623b" }}
                        onClick={() => "/blog/title/read"}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={2.9}>
                  <Card sx={{ width: "100%" }}>
                    <CardMedia
                      sx={{ height: 350 }}
                      image={
                        "https://lh5.googleusercontent.com/p/AF1QipN4kDlYdeDffguIDJZ-csXyObZ3fz1OOAtzZNYC"
                      }
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                      >
                        805 Resturant
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a dummy description, this is a sample
                        description, this is what tells you what the finished
                        resukt will look like.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        endIcon={<ShareOutlined />}
                        sx={{ backgroundColor: "#01623b" }}
                      >
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#01623b" }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={2.9}>
                  <Card sx={{ width: "100%" }}>
                    <CardMedia
                      sx={{ height: 350 }}
                      image={
                        "https://lh5.googleusercontent.com/p/AF1QipN4kDlYdeDffguIDJZ-csXyObZ3fz1OOAtzZNYC"
                      }
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                      >
                        Jevinik Resturant
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a dummy description, this is a sample
                        description, this is what tells you what the finished
                        resukt will look like.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        endIcon={<ShareOutlined />}
                        sx={{ backgroundColor: "#01623b" }}
                      >
                        Share
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#01623b" }}
                        onClick={() => navigate("/blog/title/read")}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CustomButton title="load more" />
        </Grid>
      </Grid>
    </>
  );
};

export default Body;
