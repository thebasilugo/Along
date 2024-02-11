import { Grid, Box, Typography } from "@mui/material";
import CustomButton from "../../../components/CustomButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomCard from "../../../components/CustomCard";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FullCreatePostDialog from "../../../components/FullCreatePostDialog";
const CreatePost = () => {
  return (
    <>
      <Grid item container xs={12} gap={3} marginTop={8}>
        <Grid item xs={12} sm={4}>
          <CustomCard
            sx={{
              borderRadius: "0px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              height: "25rem",
            }}
          >
            <Grid item container flexDirection={"column"} gap={2}>
              <Grid item>
                <Box
                  sx={{
                    height: "5rem",
                    width: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#323a4d",
                    borderRadius: "100%",
                  }}
                >
                  <NoteAddIcon sx={{ color: "#fff", fontSize: "3rem" }} />
                </Box>
              </Grid>
              <Grid item>
                <FullCreatePostDialog mode="create" />
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: "0.2rem",
                    width: "7rem",
                    backgroundColor: "red",
                  }}
                ></div>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Use this section to create, manage and see how your post are
                  doing,{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    click the create button to begin!
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard
            sx={{
              borderRadius: "0px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              height: "25rem",
            }}
          >
            <Grid item container flexDirection={"column"} gap={2}>
              <Grid item>
                <Box
                  sx={{
                    height: "5rem",
                    width: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#323a4d",
                    borderRadius: "100%",
                  }}
                >
                  <EditNoteIcon sx={{ color: "#fff", fontSize: "3rem" }} />
                </Box>
              </Grid>
              <Grid item>
                <CustomButton
                  title="View Drafts"
                  variant="outlined"
                  sx={{
                    paddingX: "2rem",
                    paddingY: "1rem",
                    textTransform: "initial",
                    fontSize: "1.2rem",
                    bgcolor: "#323a4d",
                    color: "#fff",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    height: "0.2rem",
                    width: "7rem",
                    backgroundColor: "red",
                  }}
                ></div>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Find and manage your saved draft post here
                </Typography>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePost;
