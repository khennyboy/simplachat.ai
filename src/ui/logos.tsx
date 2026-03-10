import { IoAddCircleSharp } from "react-icons/io5";
import { LuMessageCircleCode } from "react-icons/lu";
import CloseMenu from "./close-sideContent";
import { Link } from "react-router-dom";

const Logos = () => {
  return (
    <div className="sticky top-0 z-50 space-y-4 bg-inherit px-2 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <LuMessageCircleCode />
          <h3>simplechat.ai</h3>
        </div>
        <CloseMenu />
      </div>
      <Link
        to="/"
        className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-400 p-2"
      >
        <IoAddCircleSharp />
        <span>New Chat</span>
      </Link>
      <h4>Conversations</h4>
    </div>
  );
};

export default Logos;
