import { useState } from "react";
import Conversation from "./conversation";
import Input from "./chat-input";

const MainContent = () => {
  const [hasText, setHasText] = useState<boolean>(false);
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div
        className={`${hasText ? "flex-1" : "flex-1 flex items-center justify-center"}`}
      >
        <Conversation hasText={hasText} />
      </div>
      <Input setHasText={setHasText} />
    </div>
  );
};

export default MainContent;
