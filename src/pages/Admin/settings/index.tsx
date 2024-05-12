import { Typography, Grid, Avatar } from "@mui/material";
// import UpdateProfilePicture from "./UpdateProfilePicture";
import ahmed from "../../../asset/images/passPort.jpg";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ChangePassword from "./ChangePassword";

const index = () => {
  return (
    <>
      <Grid item container flexDirection={"column"} gap={2}>
        <Grid item>
          <Typography variant="h1" fontWeight={600} color={"GrayText"}>
            Settings
          </Typography>
        </Grid>
        <Grid
          item
          md={2.5}
          sm={3}
          display={{ sm: "block", xs: "none", position: "relative" }}
        >
          <Avatar
            sx={{
              height: "25rem",
              width: "25rem",
              fontSize: "3.5rem",
              bgcolor: "#FBB6C6",
              borderRadius: 3,
            }}
            src={ahmed}
            alt={"avatar"}
          ></Avatar>
          <CloudUploadIcon
            sx={{
              position: "absolute",
              bottom: -7,
              right: -50,
              color: "black",
            }}
            fontSize="large"
          />
          {/* <UpdateProfilePicture /> */}
        </Grid>
        <Grid item>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default index;
