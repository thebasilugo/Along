import { Box } from "@mui/material";
import { useState, useEffect } from "react";
const HeroSection = () => {
  return (
    <>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <FadingCardContent />
      </Box>
    </>
  );
};

const posts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1475018608413-f84fe2a42b7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxNDg5MDUwfHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1508154048109-de555266b70a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxNDg5MDUwfHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1523903716430-8b05cc1ce968?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  },
];

const FadingCardContent = () => {
  const [currentElement, setCurrentElement] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement + 1) % posts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {posts.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: currentElement === index ? 1 : 0,
              transition: "opacity 5s ease-in-out",
              cursor: "pointer",
            }}
          >
            <img
              src={item.img}
              alt="image"
              style={{
                height: "100%",
                width: "100%",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
