import {
  ChatBubbleBottomCenterIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import CloseMenu from "./close-sideContent";

const Logos = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <ChatBubbleBottomCenterIcon className="align-top" />
          <h3 className="font-semibold leading-none">simplechat.ai</h3>
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
