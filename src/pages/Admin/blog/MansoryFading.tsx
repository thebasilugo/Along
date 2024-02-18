import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export default function MasonryFading({ itemData }: any) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        borderRadius: "2rem",
        overflowY: "scroll",
      }}
    >
      <ImageList variant="masonry" cols={2} gap={15}>
        {itemData.map((item: any, index: number) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={"image"}
              loading="lazy"
              style={{
                borderRadius: "2rem",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
