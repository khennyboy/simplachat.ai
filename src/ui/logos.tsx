import { IoAddCircleSharp } from "react-icons/io5";
import { LuMessageCircleCode } from "react-icons/lu";
import CloseMenu from "./close-sideContent";

const Logos = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5 ">
          <LuMessageCircleCode />
          <h3>simplechat.ai</h3>
        </div>
        <CloseMenu />
      </div>
      <div className="flex gap-2 items-center rounded-lg px-2 py-3 cursor-pointer border-gray-100/30 border-2">
        <IoAddCircleSharp />
        <span>New Chat</span>
      </div>
    </div>
  );
};

export default Logos;
