import MainContent from "../ui/main-content";
import OpenSideContent from "../ui/open-sideContent";
import SideContent from "../ui/side-content";

const HomePage = () => {
  return (
    <div className="flex h-screen overflow-y-auto scrollbar-thin">
      <OpenSideContent />
      <SideContent />
      <MainContent />
    </div>
  );
};

export default HomePage;
