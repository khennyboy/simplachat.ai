import {
  PlusCircleIcon
} from "@heroicons/react/24/outline";
import { RiChatAiFill } from "react-icons/ri";
import CloseMenu from "./close-sideContent";

const Logos = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="grid  items-center grid-flow-col auto-cols-[2] gap-1 ">
          <span>
            <RiChatAiFill />
          </span>
          simplechat.ai
        </div>
        <CloseMenu />
      </div>
      <div className="flex gap-2 items-center rounded-lg px-2 py-3 cursor-pointer border-gray-100/30 border-2">
        <PlusCircleIcon />
        <span>New Chat</span>
      </div>
    </div>
  );
};

export default Logos;
