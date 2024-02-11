import { Chip, Grid, Typography } from "@mui/material";

const FadingCardContent = () => {
  return (
    <>
      <Grid item container justifyContent={"space-between"}>
        <Grid item>
          <Grid item container flexDirection={"row"} gap={20}>
            <Grid item>
              <Chip
                label="Lounge"
                sx={{
                  bgcolor: "white",
                  color: "gray",
                  paddingX: "1.5rem",
                  paddingY: "0.2rem",
                  fontSize: "1.3rem",
                }}
              />
            </Grid>
            <Grid
              item
              sx={{
                height: "16rem",
                width: "20rem",
                borderBottomLeftRadius: "2rem",
                borderBottomRightRadius: "2rem",
                marginTop: "-1rem",
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1684711741945-3f75f80db991?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3NwYWNlfGVufDB8fDB8fHww"
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottomLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Grid item>
            <Grid item container gap={2}>
              <Grid item>
                <Typography variant="h2">Workspaces</Typography>
              </Grid>
              <Grid item>
                <Typography
                  maxWidth={"70%"}
                  variant="h6"
                  sx={{ color: "gray" }}
                >
                  see and explore Workspaces or lounges around you...(
                  <span style={{ color: "blue" }}>view more</span>)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              height: "15rem",
              width: "25rem",
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3NwYWNlfGVufDB8fDB8fHww"
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: "2rem",
                borderTopRightRadius: "2rem",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FadingCardContent;
