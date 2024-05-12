import { useParams } from "react-router";
import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { ArrowBack } from "@mui/icons-material";
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
              <Typography variant="h1">{username}</Typography>
            </Grid>
            <Grid item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              porro, aut aliquam vero perspiciatis natus, reiciendis fugit eaque
              quasi consequatur eveniet exercitationem? Delectus perspiciatis
              asperiores eum odit ipsum illum tempora.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewUser;
