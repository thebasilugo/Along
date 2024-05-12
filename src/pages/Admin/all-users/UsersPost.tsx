import CustomizedTables, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/Table";
import Loader from "../../../components/Loader";
import { Grid, Chip, Box, Typography, IconButton } from "@mui/material";
import CustomCard from "../../../components/CustomCard";
import { DeleteRounded } from "@mui/icons-material";
import { formatDateTime } from "../../../utils";
import { useState } from "react";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useDeletePostMutation } from "../../../redux/api/post/mutation";
import { ToastContent, toast } from "react-toastify";
import SearchComponent from "../../../components/SearchComponent";
import {
  useGetPostQuery,
  useGetUserPostQuery,
} from "../../../redux/api/post/query";

const UsersPost = () => {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [search, setSearch] = useState("");
  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);
  const { data: usersPost, isLoading } = useGetPostQuery();
  const { data: currentLoggedIn } = useGetUserPostQuery();
  console.log(currentLoggedIn);
  const columns = ["Post Title", "Post Date", "Category", "Comments"];
  const handleDeletePost = async (postId: string) => {
    const response = await deletePost(postId);
    if ("data" in response) {
      toast.success("Deleted successfully");
      handleCloseConfirmation();
    }
    if ("error" in response) {
      const errMsg = response.error;
      toast.error(errMsg as ToastContent);
    }
  };
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const [toDeletePost, setDeletePost] = useState<any>(null);
  if (isLoading) return <Loader />;
  return (
    <>
      <CustomCard
        sx={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "3rem",
          padding: "3rem",
          borderRadius: "0.5rem",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Grid item container>
          <Grid item xs={12}>
            <Grid item container alignItems={"center"} gap={1}>
              <Grid item xs={8}>
                <SearchComponent
                  searchTerm={search}
                  placeholder="Search by Post title"
                  onChange={handleChange}
                />
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Total Published Post
                </Typography>
                <Chip
                  label={usersPost && usersPost?.length}
                  sx={{ borderRadius: ".5rem", fontWeight: "800" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <CustomizedTables columns={columns}>
            {usersPost && usersPost?.length === 0 ? (
              <>
                <StyledTableRow>
                  <Typography textAlign={"center"}>
                    Nothing here yet, try creating new post
                  </Typography>
                </StyledTableRow>
              </>
            ) : (
              usersPost
                ?.filter((post: any) =>
                  post?.title?.toLowerCase()?.includes(search?.toLowerCase())
                )
                ?.map(
                  ({
                    _id,
                    title,
                    date,
                    category,
                    comments,
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
                        <IconButton
                          onClick={() => {
                            setDeletePost(_id);
                            handleOpenConfirmation();
                          }}
                        >
                          <DeleteRounded color="error" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                )
            )}
          </CustomizedTables>
          <ConfirmationModal
            open={openConfirmation}
            handleClose={handleCloseConfirmation}
            isSuccess={true}
            title="Confirm Delete"
            okLabel={isDeleting ? "Deleting" : "Delete"}
            okAction={() => handleDeletePost(toDeletePost)}
          >
            <Typography>
              <Typography
                variant="h4"
                textAlign={"center"}
              >{`Are you sure you want to delete users post`}</Typography>
            </Typography>
          </ConfirmationModal>
        </Grid>
      </CustomCard>
    </>
  );
};

export default UsersPost;
