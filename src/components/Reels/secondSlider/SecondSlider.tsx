"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WhoWeAre from "@/app/LandinPage/WhoWeAre";
import realTimeMonitoring from "../../../../images/real_time_monitoring.jpg";
import accessToTopTalent from "../../../../images/access_to_top_talent.jpg";
import robustProfiles from "../../../../images/robust_profile.jpg";
import enhancedVisibility from "../../../../images/ehnanced_visibility.jpg";
import payment from "../../../../images/seamlessPayment.jpg";
import documentSharing from "../../../../images/document_sharing.jpg";

const values = [
  {
    id: 1,
    image: realTimeMonitoring,
    title: "Live Audit & Real-time Monitoring",
    content:
      "Conduct remote audits from anywhere, simplifying the process Also, ensure quality audits and streamline oversight.",
  },
  {
    id: 2,
    image: accessToTopTalent,
    title: "Access to Top Talent",
    content:
      "Connect with validated professionals to meet your auditing and other industry needs.",
  },
  {
    id: 3,
    image: robustProfiles,
    title: "Robust Profiles",
    content:
      "Showcase your experience, and ratings; validate your credentials, and enhance your professional visibility and trustworthiness.",
  },
  {
    id: 4,
    image: enhancedVisibility,
    title: "Enhanced Visibility",
    content:
      "Promote your expertise, stand out in the industry, and attract more clients through our open marketplace.",
  },
  {
    id: 5,
    image: documentSharing,
    title: "Document Sharing and Collaboration",
    content:
      "Securely share project documents, collaborate on edits, and ensure everyone has access to the latest information.",
  },
  {
    id: 6,
    image: payment,
    title: "Seamless Payments",
    content:
      "Secure, global transactions across all currencies.( this should be what should be in the reel) adeyemigems@gmail.com please come up with images for this.",
  },
];

export const SecondSlider = () => {
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
        padding: "0 4rem 4rem 4rem",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Slider ref={slider} {...settings}>
        {values?.map((value) => (
          <WhoWeAre key={value.id} values={value} />
        ))}
      </Slider>
      <IconButton
        sx={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
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
        }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};
