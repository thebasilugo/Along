import NavBar from "../../landing-page-component/NavBar";
import CustomView from "../../../components/layout/CustomView";
import { Grid } from "@mui/material";
// import FadingCardNewComponent from "../../Admin/blog/FadingCardNewComponent";
const index = () => {
  return (
    <>
      <NavBar />
      <CustomView>
        {/* <FadingCardNewComponent /> */}
        <Grid item container flexDirection={"column"} gap={2}>
          checking to confirm
        </Grid>
      </CustomView>
    </>
  );
};

export default index;
