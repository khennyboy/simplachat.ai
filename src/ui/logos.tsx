import {
  ChatBubbleBottomCenterIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const Logos = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <div className="flex items-center">
          <ChatBubbleBottomCenterIcon className="cursor-default" />
          <h3>simplechat.ai</h3>
        </div>

        <XCircleIcon />
      </div>
      <div className="flex items-center rounded-lg p-2 cursor-pointer border-gray-100/30 border-2">
        <PlusCircleIcon />
        <span>New Chat</span>
      </div>
    </div>
  );
};

export default Logos;
