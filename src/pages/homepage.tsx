import Conversation from "../ui/conversation";
import Input from "../ui/input";
import OpenSideContent from "../ui/open-sideContent";
import SideContent from "../ui/side-content";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <OpenSideContent />
      <SideContent />
      <div className="bg-acive-convo flex flex-col flex-1 overflow-y-auto">
        <Conversation />
        <Input />
      </div>
    </div>
  );
};

export default HomePage;
