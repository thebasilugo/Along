import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import MasonryFading from "./MansoryFading";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1600891965050-6da6bad77c3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664189121690-fd870956d9f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  },
]

const FadingCardNewComponent = () => {
  const [currentElement, setCurrentElement] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement + 1) % itemData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {itemData.map((element, index) => (
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
          >
            <Grid item container width={"100%"} height={"100%"}>
              <MasonryFading itemData={element?.img} />
            </Grid>
          </div>
        ))}
      </div>
    </>
  );
};

export default FadingCardNewComponent;
