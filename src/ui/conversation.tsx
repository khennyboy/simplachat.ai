import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCurrentConversation } from "../hooks/get-current-conversation";
import { useDataContext } from "../hooks/use-data-context";

export default function Conversation() {
  const { currentConversation = [], setCurrentConversation } = useDataContext();
  const { conversationId } = useParams();

  // Load conversation when ID changes
  useEffect(() => {
    setCurrentConversation(getCurrentConversation(conversationId));
  }, [conversationId, setCurrentConversation]);

  if (!currentConversation || currentConversation.length === 0) {
    return (
      <div className="flex items-center justify-center py-6 text-lg italic">
        No conversation found for this ID.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-3">
      {currentConversation.map((msg, index) => {
        return (
          <div key={index} className="flex flex-col space-y-3">
            {/* User question */}
            <div className="flex justify-end">
              <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-none bg-blue-500 px-4 py-2 wrap-break-word text-white">
                {msg.question}
              </div>
            </div>

            {/* Bot answer */}
            <div className="flex justify-start">
              <div className="w-fit max-w-[80%] rounded-2xl rounded-br-none bg-gray-300 px-4 py-2 wrap-break-word text-gray-900">
                {msg.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
