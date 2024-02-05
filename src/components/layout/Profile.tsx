import { Avatar, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/store";
const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Grid item container paddingX={3} flexDirection={"column"} gap={2}>
      <Grid item>
        <Avatar
          alt={"image"}
          variant="rounded"
          sx={{ bgcolor: "#fff", color: "#333", height: "8rem", width: "8rem" }}
        ></Avatar>
      </Grid>
      <Grid item>
        <Typography>{user?.name}</Typography>
      </Grid>
      <Grid item>
        <Typography>{user?.email}</Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
