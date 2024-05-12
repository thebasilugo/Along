import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentOne from "./slider_contents/ContentOne";
import ContentTwo from "./slider_contents/ContentTwo";
export const ResponsiveSlider = () => {
  const slider = useRef<Slider>(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 8000,
    cssEase: "ease",
  };

  return (
    <Box
      sx={{
        padding: "0 0rem 4rem 0rem", //the arrow is still here, i just removed the padding right and left that is why u are not seeing it
        overflowX: "hidden",
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <Slider ref={slider} {...settings}>
        <ContentOne />
        <ContentTwo />
      </Slider>
      <IconButton
        sx={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "#fff",
        }}
        onClick={() => slider.current?.slickPrev()}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={() => slider.current?.slickNext()}
        sx={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "#fff",
        }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};
