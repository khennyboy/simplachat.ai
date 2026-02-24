
import Conversation from "../ui/conversation";
import Input from "../ui/input";
import Nav from "../ui/nav";
import OpenSdeBar from "../ui/openMenu";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <OpenSdeBar />
      <Nav />
      <div className="bg-acive-convo flex flex-col flex-1 overflow-y-auto">
        <Conversation />
        <Input />
      </div>
    </div>
  );
};

export default HomePage;
