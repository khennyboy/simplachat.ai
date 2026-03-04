import { IoAddCircleSharp } from "react-icons/io5";
import { LuMessageCircleCode } from "react-icons/lu";
import CloseMenu from "./close-sideContent";

const Logos = () => {
  return (
    <div className="space-y-4 bg-inherit sticky top-0 z-50 px-2 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5 ">
          <LuMessageCircleCode />
          <h3>simplechat.ai</h3>
        </div>
        <CloseMenu />
      </div>
      <a
        href="#"
        className="flex gap-2 items-center rounded-lg p-2 border-gray-400 border-2  cursor-pointer "
      >
        <IoAddCircleSharp />
        <span>New Chat</span>
      </a>
      <h4>Conversations</h4>
    </div>
  );
};

export default Logos;
