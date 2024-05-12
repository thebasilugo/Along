import NavBar from "../../landing-page-component/NavBar";
import CustomView from "../../../components/layout/CustomView";
import HeroSection from "./HeroSection";
import Body from "./Body";
// import FadingCardNewComponent from "../../Admin/blog/FadingCardNewComponent";
const index = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <CustomView>
        <Body />
      </CustomView>
    </>
  );
};

export default index;
