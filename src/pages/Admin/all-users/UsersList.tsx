import SearchComponent from "../../../components/SearchComponent";
import { Grid, Typography, Chip, IconButton } from "@mui/material";
import Loader from "../../../components/Loader";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { formatDateTime } from "../../../utils";
import { DeleteRounded, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useState } from "react";
import CustomizedTables, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/Table";
import { useGetUsersQuery } from "../../../redux/api/users/query";
const UsersList = () => {
  const navigate = useNavigate();
  const columns = [
    "Name",
    "Joined Date",
    "Users Status",
    "Account type",
    "Post Count",
    "User Name",
    "Email",
    "Action",
  ];
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleViewUser = (username: string) => {
    navigate(`/user-list/${username}`);
  };
  const { data: allRegisteredUsers, isLoading } = useGetUsersQuery();
  if (isLoading) return <Loader />;
  return (
    <>
      <Grid
        item
        container
        height={"100%"}
        width={"100%"}
        sx={{ overflowY: "scroll" }}
      >
        <Grid item xs={12}>
          <Grid item container alignItems={"center"} gap={1}>
            <Grid item xs={8}>
              <SearchComponent
                searchTerm={search}
                placeholder="Search by user name"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <Typography variant="h6" fontWeight={600}>
                Total Registered Users
              </Typography>
              <Chip
                label={allRegisteredUsers && allRegisteredUsers?.length}
                sx={{ borderRadius: ".5rem", fontWeight: "800" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <CustomizedTables columns={columns}>
          {allRegisteredUsers && allRegisteredUsers?.length === 0 ? (
            <>
              <StyledTableRow>
                <Typography textAlign={"center"}>Nothing here yet</Typography>
              </StyledTableRow>
            </>
          ) : (
            allRegisteredUsers
              ?.filter((item: any) =>
                item?.name?.toLowerCase()?.includes(search?.toLowerCase())
              )
              ?.map(
                ({
                  _id,
                  account_type,
                  isSuspended,
                  name,
                  post_count,
                  date,
                  user_name,
                  email,
                }: any) => (
                  <StyledTableRow key={_id}>
                    <StyledTableCell component="th" scope="row">
                      {name || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell align="left" sx={{ color: "#5C6E9A" }}>
                      {formatDateTime(date)}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ color: isSuspended ? "red" : "#5C6E9A" }}
                    >
                      {isSuspended ? "suspended" : "active"}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Chip
                        label={account_type || "N/A"}
                        sx={{
                          backgroundColor: "#5C6E9A",
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Chip
                        label={post_count?.length || "N/A"}
                        sx={{
                          backgroundColor: "#5C6E9A",
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">{user_name}</StyledTableCell>
                    <StyledTableCell align="left">{email}</StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ color: "#5C6E9A", display: "flex", width: "100%" }}
                    >
                      <IconButton onClick={handleOpenConfirmation}>
                        <DeleteRounded color="error" />
                      </IconButton>
                      <IconButton onClick={() => handleViewUser(user_name)}>
                        <RemoveRedEye />
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
          title="Confirm User Suspension"
          okLabel="suspend"
          //   okLabel={isDeleting ? "Deleting" : "Delete"}
          //   okAction={() => handleDeletePost(toDeletePost)}
          okAction={() => alert("working")}
        >
          <Typography>
            <Typography
              variant="h4"
              textAlign={"center"}
            >{`Are you sure you want to suspend "N/a"`}</Typography>
          </Typography>
        </ConfirmationModal>
      </Grid>
    </>
  );
};

export default UsersList;
