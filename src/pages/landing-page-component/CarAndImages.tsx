import { Grid, Box } from "@mui/material";
import car from "../../asset/landing-page-icons/car.png";
import icon from "../../asset/landing-page-icons/Group.png";
import elipseIcon from "../../asset/landing-page-icons/Ellipse.png";
import elipseIcon2 from "../../asset/landing-page-icons/ellipse2.png";
import elipseIcon3 from "../../asset/landing-page-icons/ellipse3.png";
import rectangle from "../../asset/landing-page-icons/Rectangle.png";
import star from "../../asset/landing-page-icons/star.png";
import star1 from "../../asset/landing-page-icons/star1.png";
const CarAndImages = () => {
  return (
    <Grid
      item
      container
      flexDirection={"row"}
      justifyContent={"center"}
      width={"100%"}
      padding={2}
      marginTop={10}
      //   sx={{
      //     display: { xs: "none", sm: "block" },
      //   }}
    >
      <Grid
        item
        sx={{
          height: { xs: "10rem", sm: "20rem" },
          width: { xs: "20rem", sm: "60rem" },
          position: "relative",
        }}
      >
        <img
          src={car}
          alt="carImage"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item>
        <>
          {/* the icon at the back of the car */}
          <Box
            className="iconBounce"
            sx={{
              height: { xs: "4rem", sm: "9rem" },
              width: { xs: "4rem", sm: "9rem" },
              position: "absolute",
              bottom: { xs: "25rem", sm: "4rem" },
              left: { xs: "5rem", sm: "30rem" },
            }}
          >
            <img
              src={icon}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            className="iconBounce"
            sx={{
              height: "1rem",
              width: "1rem",
              position: "absolute",
              bottom: "13rem",
              left: "33rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src={elipseIcon}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            className="iconBounce"
            sx={{
              height: "1rem",
              width: "1rem",
              position: "absolute",
              bottom: "5rem",
              left: "36rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src={elipseIcon}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </>
        <>
          {/* icon at the bonnet of the car */}
          <Box
            className="iconBounce"
            sx={{
              height: "0.8rem",
              width: "0.8rem",
              position: "absolute",
              top: "56rem",
              right: "55rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src={elipseIcon3}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </>
        <>
          {/* the star that follow it */}
          <Box
            className="iconBounce"
            sx={{
              height: "1.5rem",
              width: "1.5rem",
              position: "absolute",
              top: "45rem",
              right: "50rem",
            }}
          >
            <img
              src={star}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </>
        <>
          {/* the red star that follows */}
          <Box
            className="iconBounce"
            sx={{
              height: "1rem",
              width: "1rem",
              position: "absolute",
              top: "40rem",
              right: "45rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src={star1}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </>
        <>
          {/* the blue circle in front of the car */}
          <Box
            className="iconBounce"
            sx={{
              height: "1.3rem",
              width: "1.3rem",
              position: "absolute",
              top: "56rem",
              right: "40rem",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src={elipseIcon}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </>
        <>
          <Box
            className="iconBounce"
            sx={{
              height: "1.5rem",
              width: "1.5rem",
              position: "absolute",
              top: "40rem",
              right: "25rem",
            }}
          >
            <img
              src={elipseIcon2}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </>
        <Box
          className="iconBounce"
          sx={{
            height: "1.5rem",
            width: "1.5rem",
            position: "absolute",
            top: "45rem",
            right: "20rem",
          }}
        >
          <img
            src={rectangle}
            alt="icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CarAndImages;
