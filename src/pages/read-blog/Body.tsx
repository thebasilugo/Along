import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ResponsiveSlider } from "../../components/Reels";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import CommentDialog from "./CommentDialog";
const Body = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography>Go back</Typography>
      </Box>
      <ResponsiveSlider />
      <Grid
        item
        container
        width={"90%"}
        marginX={"auto"}
        flexDirection={"column"}
        gap={3}
        marginTop={2}
        marginBottom={4}
      >
        <Grid item>
          <Grid item container flexDirection={"column"} gap={2}>
            <Grid item>
              <Typography variant="h1" textAlign={"center"}>
                How to reach Jevinik Resturant From Lugbe
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" textAlign={"center"}>
                BY
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" textAlign={"center"} fontWeight={"bold"}>
                Adenigba Ahmed Adefolarin{" "}
                <span
                  style={{
                    fontSize: "1.2rem",
                    marginLeft: ".5rem",
                    fontWeight: "400",
                  }}
                >
                  Feb 28, 2024
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5" textAlign={"justify"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus voluptatem repellat quis repudiandae, odit minima
            sapiente sed, possimus obcaecati nisi itaque tempore! Nisi optio
            quia, cum omnis dolores eligendi quam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error, dignissimos eum iure a suscipit
            voluptatibus non officia placeat est commodi cupiditate voluptates
            esse ea, blanditiis fuga soluta velit, totam modi!
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            dignissimos, vero praesentium rem quis vel corrupti debitis maxime
            officiis nam labore, iure dolore nostrum at est sunt tempore?
            Reiciendis unde, neque repudiandae dolorum, architecto at tenetur
            reprehenderit quo quisquam cumque exercitationem fugiat molestias.
            Ad optio rerum voluptas. Possimus temporibus omnis sed esse, neque
            optio cumque cupiditate perferendis placeat porro quia officiis aut
            aspernatur corporis voluptatem dolore molestiae tempore rerum maxime
            deleniti autem reprehenderit maiores? Temporibus natus nisi
            inventore quas. Eos minima at nesciunt laudantium. Iure illo
            praesentium voluptatibus dolores? Laudantium sed suscipit dolorem
            dolor dolorum eaque voluptate nulla, autem debitis?
            <br />
            <br />
            Thanks for reading
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "flex-end",
            },
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            endIcon={<ShareIcon fontSize="large" sx={{ color: "#fff" }} />}
          >
            Share
          </Button>
          <CommentDialog />
          <Badge badgeContent={2} color="primary">
            <IconButton>
              <ThumbUpIcon fontSize="large" />
            </IconButton>
          </Badge>
          <Badge badgeContent={1} color="error">
            <IconButton>
              <ThumbDownIcon fontSize="large" />
            </IconButton>
          </Badge>
        </Grid>
      </Grid>
    </>
  );
};

export default Body;
