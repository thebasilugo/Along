import { useParams } from "react-router";
import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { ArrowBack } from "@mui/icons-material";
import UsersPost from "./UsersPost";
const ViewUser = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { username } = useParams();
  console.log(username);
  return (
    <>
      <Grid item container flexDirection={"column"} gap={3}>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <IconButton onClick={handleBack}>
            <ArrowBack fontSize="large" />
          </IconButton>
          <Typography>Go back</Typography>
        </Grid>
        <Grid item>
          <Grid item container flexDirection={"column"} gap={3}>
            <Grid item>
              <Typography variant="h1">
                {username}{" "}
                <span style={{ fontWeight: "500", fontSize: "1.3rem" }}>
                  joined Feb 12, 2024.
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Grid item container flexDirection={"column"} gap={3}>
                <Grid item>
                  <Typography
                    variant="h2"
                    textAlign={"center"}
                    color={"GrayText"}
                  >
                    Users Post
                  </Typography>
                </Grid>
                <Grid item>
                  <UsersPost />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewUser;
