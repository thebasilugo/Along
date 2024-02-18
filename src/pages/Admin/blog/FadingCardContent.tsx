import { Chip, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MasonryFading from "./MansoryFading";
const posts = [
  {
    id: 1,
    category: "Resturants",
    itemData: [
      {
        img: "https://images.unsplash.com/photo-1600891965050-6da6bad77c3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1664189121690-fd870956d9f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    description: "Get directions to visit popular resturants around you",
    route: "/resturants",
  },
  {
    id: 2,
    category: "Hotels",
    itemData: [
      {
        img: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww",
      },
      {
        img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    description: "Get directions to visit popular hotels around you",
    route: "/hotels",
  },
  {
    id: 3,
    category: "Malls",
    itemData: [
      {
        img: "https://images.unsplash.com/photo-1590501420941-383a4c14e10c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsbHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        img: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGxzfGVufDB8fDB8fHww",
      },
      {
        img: "https://images.unsplash.com/photo-1621406384199-f9ee619e3810?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsbHN8ZW58MHx8MHx8fDA%3D",
      },
    ],
    description: "Get directions to visit popular malls around you",
    route: "/malls",
  },
  {
    id: 4,
    category: "Parks",
    itemData: [
      {
        img: "https://images.unsplash.com/photo-1606064067659-f093ee0148fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFya3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        img: "https://images.unsplash.com/photo-1560651471-d7fca5abfd5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmtzfGVufDB8fDB8fHww",
      },
      {
        img: "https://images.unsplash.com/photo-1588637108939-bcaf03de90cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcmtzfGVufDB8fDB8fHww",
      },
    ],
    description: "Get directions to visit popular parks around you",
    route: "/parks",
  },
];

const FadingCardContent = () => {
  const navigate = useNavigate();
  const [currentElement, setCurrentElement] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement + 1) % posts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  const handleRoute = (route: string) => {
    console.log(route);
    navigate(route);
  };
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {posts.map((element, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: currentElement === index ? 1 : 0,
              transition: "opacity 4s ease-in-out",
              cursor: "pointer",
            }}
            onClick={() => handleRoute(element?.route)}
          >
            <Grid item container width={"100%"} height={"100%"}>
              <Grid
                xs={5}
                item
                height={"100%"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                }}
              >
                <Grid item>
                  <Chip
                    label={element?.category}
                    sx={{
                      bgcolor: "white",
                      color: "gray",
                      paddingX: "1.5rem",
                      paddingY: "0.2rem",
                      fontSize: "1.5rem",
                      borderRadius: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight={600}>
                    {element?.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={7}>
                <MasonryFading itemData={element?.itemData} />
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </>
  );
};

export default FadingCardContent;
