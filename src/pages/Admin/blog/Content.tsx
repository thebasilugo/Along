import { Chip, Grid, Box, Typography } from "@mui/material";
import CustomCard from "../../../components/CustomCard";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import FadingCardContent from "./FadingCardContent";
import CustomButton from "../../../components/CustomButton";
import MasonryImageList from "./MansoryImages";

const Content = () => {
  return (
    <>
      <Grid item container xs={12} gap={2} marginTop={8}>
        <Grid item xs={12} sm={8.2}>
          <CustomCard sx={{ backgroundColor: "#E6F7FF", height: "30rem" }}>
            <FadingCardContent />
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <CustomCard
            sx={{
              background:
                "linear-gradient(to bottom, #FFDAAA 0%, #FFDAAA 10%, #FFDAAA 20%)",
              height: "30rem",
            }}
          >
            <Grid item container flexDirection={"column"} gap={3}>
              <Grid item>
                <Chip
                  label="Shortcuts"
                  sx={{ bgcolor: "#fff", color: "#FDBA74" }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "3rem" }}
                >
                  <Box
                    sx={{
                      height: "5rem",
                      width: "5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                    }}
                  >
                    <DepartureBoardIcon
                      fontSize="large"
                      sx={{ color: "#FDBA74" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: "10rem",
                      width: "10rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                    }}
                  >
                    <DepartureBoardIcon
                      sx={{ fontSize: "5rem", color: "#FDBA74" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: "5rem",
                      width: "5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                    }}
                  >
                    <DepartureBoardIcon
                      fontSize="large"
                      sx={{ color: "#FDBA74" }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant="h4" fontWeight={600}>
                  Along Time
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Figure out how long it takes to get from one place to another
                  using Along...(
                  <span
                    style={{ textUnderlineOffset: "0.5rem", color: "blue" }}
                  >
                    read more
                  </span>
                  )
                </Typography>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
      <Grid item container marginTop={3}>
        <CustomCard sx={{ backgroundColor: "#E6F7FF", padding: "0rem" }}>
          <Grid item container xs={12}>
            <Grid item xs={12} sm={7}>
              <Grid item container flexDirection={"column"} gap={2} padding={6}>
                <Grid item>
                  <Typography variant="h2" fontWeight={600}>
                    Explore important places
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{ color: "gray" }}
                  >
                    Have your favourites places at your fingertip!
                  </Typography>
                </Grid>
                <Grid item>
                  <CustomButton
                    title="Start exploring"
                    sx={{
                      paddingX: "3rem",
                      paddingY: "2rem",
                      fontSize: "1.3rem",
                      bgcolor: "#722b82",
                      textTransform: "initial",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box sx={{ width: "100%" }}>
                <MasonryImageList />
              </Box>
            </Grid>
          </Grid>
        </CustomCard>
      </Grid>
    </>
  );
};

export default Content;
