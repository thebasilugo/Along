import CustomCard from "../../../components/CustomCard";
import { Grid, Typography, Box } from "@mui/material";
import MovingIcon from "@mui/icons-material/Moving";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CustomButton from "../../../components/CustomButton";
import { useGetUsersQuery } from "../../../redux/api/users/query";
import Loader from "../../../components/Loader";
import { useNavigate } from "react-router";

const Footer = () => {
  const { data: allRegisteredUsers, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();
  const handleGoToAllUsers = () => {
    navigate("all-users");
  };
  if (isLoading) return <Loader />;
  return (
    <Grid item container xs={12} marginTop={5}>
      <Grid item xs={12} sm={3}>
        <CustomCard sx={{ bgcolor: "#323a4d", width: "100%" }}>
          <Grid item container flexDirection={"column"} gap={2}>
            <Grid item>
              <Grid
                item
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Grid item>
                  <Grid item container flexDirection={"column"} gap={1}>
                    <Grid item>
                      <Box
                        sx={{
                          height: "3rem",
                          width: "3rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#10AE9D",
                          borderRadius: "100%",
                        }}
                      >
                        <PeopleAltOutlinedIcon fontSize="medium" />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" sx={{ color: "#B6B7BC" }}>
                        all users
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item container gap={1}>
                    <Grid item>
                      <MovingIcon sx={{ color: "white" }} fontSize="large" />
                    </Grid>
                    <Grid item>
                      <Grid item container flexDirection={"column"} gap={1}>
                        <Grid item>
                          <Typography color={"white"}>0%</Typography>
                        </Grid>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#B6B7BC" }}
                        >
                          this month
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                item
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item>
                  <Typography variant="h3" color={"white"}>
                    {allRegisteredUsers && allRegisteredUsers?.length}
                  </Typography>
                </Grid>
                <Grid item>
                  <CustomButton
                    title="see info"
                    onClick={handleGoToAllUsers}
                    sx={{
                      bgcolor: "#10AE9D",
                      color: "#fff",
                      textTransform: "initial",
                      fontSize: "1.3rem",
                      borderRadius: "1.3rem",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CustomCard>
      </Grid>
    </Grid>
  );
};

export default Footer;
