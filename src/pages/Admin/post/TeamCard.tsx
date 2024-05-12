import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ahmed from "../../../asset/images/passPort.jpg";
import { useState } from "react";
const TeamCard = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Card
      sx={{
        position: "relative",
        textAlign: "center",
        minHeight: 400,
        maxWidth: 300,
        lineHeight: 2,
        margin: "2rem",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        src={ahmed}
        alt={`${"Ahmed"} snapshot`}
        sx={{
          height: 300,
          width: "100%",
          borderRadius: 24,
          marginBottom: "1rem",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "yellow",
          color: "blueviolet",
          textAlign: "start",
          padding: "1rem",
          borderRadius: 24,
          overflow: "hidden",
          opacity: hovered ? 1 : 0,
          width: "100%",
          height: "100%",
          transition: "opacity 1s ease",
        }}
      >
        <CardContent
          style={{
            margin: "auto",
            transform: "translateY(-50%)",
          }}
        >
          <Typography variant="h5">Ahmed</Typography>
          <Typography variant="subtitle1">farmer</Typography>
          <Typography variant="body1">Balling</Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default TeamCard;
