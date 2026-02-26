import Conversation from "../ui/conversation";
import Input from "../ui/input";
import OpenSideContent from "../ui/open-sideContent";
import SideContent from "../ui/side-content";

const HomePage = () => {
  return (
    <div className="flex h-screen scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll">
      <OpenSideContent />
      <SideContent />
      <div className="bg-acive-convo flex flex-col flex-1 px-2">
        <Conversation />
        <Input />
      </div>
    </div>
  );
};

export default HomePage;
