import { Grid } from "@mui/material";
import NavBar from "../landing-page-component/NavBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  return (
    <>
      <Grid item width={"90%"} marginX={"auto"} flexDirection={"column"}>
        <NavBar />
      </Grid>
      <Grid item container width={"98%"} marginX={"auto"} height={"100%"}>
        <ImageList sx={{ width: "100%", height: "100%" }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => navigate(`/${item?.title}`)}
                style={{ cursor: "pointer" }}
              />
              <ImageListItemBar
                sx={{
                  fontWeight: "600",
                }}
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "resturants",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1496144300411-8dd31ce145ba?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Government Offices",
  },
  {
    img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hotels",
  },
  {
    img: "https://images.unsplash.com/photo-1557428028-32f72be0f811?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Malls",
  },
];
