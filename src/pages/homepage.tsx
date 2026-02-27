import MainContent from "../ui/main-content";
import OpenSideContent from "../ui/open-sideContent";
import SideContent from "../ui/side-content";

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      <OpenSideContent />
      <SideContent />
      <MainContent />
    </div>
  );
};

export default HomePage;
