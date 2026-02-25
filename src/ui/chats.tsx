import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const Chats = () => {
  return (
    <div className="space-y-4 mt-4">
      <h4>Conversations</h4>
      
      <div className="flex gap-2 group relative p-3 rounded-md bg-gray-800 transition-all duration-200 ease-linear">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>New Chat</span>

        <div className="absolute flex gap-1 group-hover:flex right-2">
          <PencilIcon />
          <TrashIcon />
        </div>
      </div>
    </div>
  );
};

export default Chats;
