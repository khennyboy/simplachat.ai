import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const Chats = () => {
  return (
    <div>
      <h4>Conversations</h4>
      <div className="flex group relative">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>New Chat</span>

        <div className="absolute flex group-hover:flex  right-0">
          <PencilIcon />
          <TrashIcon />
        </div>
      </div>
    </div>
  );
};

export default Chats;
