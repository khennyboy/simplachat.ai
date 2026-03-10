import MainContent from "../ui/main-content";
import OpenSideContent from "../ui/open-sideContent";
import OverLay from "../ui/overlay";
import SideContent from "../ui/side-content";

const HomePage = () => {
  return (
    <div>
      <OpenSideContent />
      <SideContent />
      <MainContent />
      <OverLay />
    </div>
  );
};

export default HomePage;
