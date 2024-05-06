// import axios from "axios";
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
import FullCreatePostDialog from "../../../components/FullCreatePostDialog";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useDeletePostMutation } from "../../../redux/api/post/mutation";
import { ToastContent, toast } from "react-toastify";
import SearchComponent from "../../../components/SearchComponent";
// import { useAppSelector } from "../../../redux/store";
// import errorImage from "../../../asset/animatedImages/error500.json";
// import Lottie from "lottie-react";
import {
  useGetPostQuery,
  useGetUserPostQuery,
} from "../../../redux/api/post/query";
import ShareButton from "./ShareButton";

const PublishedPost = () => {
  // const { session, user } = useAppSelector((state) => state.auth);
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [search, setSearch] = useState("");
  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);
  const { data: usersPost, isLoading } = useGetPostQuery();
  const { data: currentLoggedIn } = useGetUserPostQuery();
  console.log(currentLoggedIn);
  // const [usersPost, setUsersPost] = useState<any>(null);
  // const [isLoading, setIsLoading] = useState(false);
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const requestData = {
  //         email: user?.email,
  //       };
  //       const response = await axios.get(
  //         "https://blogapp-vtdd.onrender.com/api/post/usersPosts",
  //         {
  //           data: requestData,
  //           headers: {
  //             Authorization: `${session}`,
  //           },
  //         }
  //       );
  //       console.log(response.data);
  //       setUsersPost(response?.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setIsLoading(false);
  //     }
  //   };
  //   // Call fetchData function when component mounts
  //   fetchData();
  // }, []);
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
        {/* {usersPost === null ? (
          <Lottie
            animationData={errorImage}
            loop
            autoplay
            style={{ width: "100%", height: "300px" }}
          />
        ) : (
          <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in mollitia expedita iusto facilis beatae iste quae animi minima labore voluptatem perspiciatis, atque reprehenderit adipisci eos rerum doloremque, saepe ratione.
          </>
        )} */}
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
                          category={category}
                        />
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
              >{`Are you sure you want to delete post`}</Typography>
            </Typography>
          </ConfirmationModal>
        </Grid>
        <ShareButton url="https://images.unsplash.com/photo-1714685953621-4e7ae070ee02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" />
      </CustomCard>
    </>
  );
};

export default PublishedPost;
