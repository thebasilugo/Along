import CustomizedTables, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/Table";
import { useGetPostQuery } from "../../../redux/api/post/query";
import Loader from "../../../components/Loader";
import { Grid, Chip, Box, Typography, IconButton } from "@mui/material";
import CustomCard from "../../../components/CustomCard";
// import logo from "../../../asset/dashboard/frameDashboard.png";
import { DeleteRounded } from "@mui/icons-material";
import { formatDateTime } from "../../../utils";
import { useState } from "react";
import FullCreatePostDialog from "../../../components/FullCreatePostDialog";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useDeletePostMutation } from "../../../redux/api/post/mutation";
import { ToastContent, toast } from "react-toastify";
const PublishedPost = () => {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);
  const { data: usersPost, isLoading } = useGetPostQuery();
  console.log(usersPost);
  const columns = ["Article Title", "Post Date", "Category", "Comments"];
  const handleDeletePost = async (postId: string) => {
    const response = await deletePost(postId);
    if ("data" in response) {
      toast.success("Deleted successfully");
    }
    if ("error" in response) {
      const errMsg = response.error;
      toast.error(errMsg as ToastContent);
    }
  };

  if (isLoading) return <Loader />;
  return (
    <>
      <CustomCard
        sx={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "3rem",
          padding: "3rem",
          borderRadius: "0.5rem",
          height: "30rem",
          overflowY: "scroll",
        }}
      >
        <Grid item container>
          <CustomizedTables columns={columns}>
            {usersPost && usersPost?.length === 0 ? (
              <Typography>Nothing here yet, try creating new post</Typography>
            ) : (
              usersPost?.map(
                ({
                  _id,
                  title,
                  date,
                  category,
                  comments,
                  description,
                  image,
                }: any) => (
                  <StyledTableRow key={_id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "#9CA7C4",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "1rem",
                        }}
                      >
                        {/* Assuming `image` is a prop or part of your data */}
                        <img
                          src={image}
                          alt="image"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                            borderRadius: "1rem",
                          }}
                        />
                      </Box>
                      {title || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell align="left" sx={{ color: "#5C6E9A" }}>
                      {formatDateTime(date)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Chip
                        label={category || "N/A"}
                        sx={{
                          backgroundColor: "#5C6E9A",
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left" sx={{ color: "#5C6E9A" }}>
                      {comments?.length || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell align="left" sx={{ color: "#5C6E9A" }}>
                      <FullCreatePostDialog
                        mode="edit"
                        id={_id}
                        title={title}
                        description={description}
                        image={image}
                      />
                      <IconButton onClick={handleOpenConfirmation}>
                        <DeleteRounded color="error" />
                      </IconButton>
                      <ConfirmationModal
                        open={openConfirmation}
                        handleClose={handleCloseConfirmation}
                        isSuccess={true}
                        title="Confirm Delete"
                        okLabel={isDeleting ? "Deleting" : "Delete"}
                        okAction={() => handleDeletePost(_id)}
                      >
                        <Typography>
                          <Typography
                            variant="h4"
                            textAlign={"center"}
                          >{`Are you sure you want to delete  ${title} post`}</Typography>
                        </Typography>
                      </ConfirmationModal>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )
            )}
          </CustomizedTables>
        </Grid>
      </CustomCard>
    </>
  );
};

export default PublishedPost;
