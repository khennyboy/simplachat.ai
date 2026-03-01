import { useState } from "react";
import Conversation from "./conversation";
import Input from "./chat-input";

const MainContent = () => {
  const [hasText, setHasText] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col gap-5 flex-1 px-4 scrollbar-thin ${
        hasText
          ? "justify-start overflow-y-auto"
          : "justify-center overflow-y-hidden"
      } items-center`}
    >
      <Conversation hasText={hasText} />
      <Input setHasText={setHasText} />
    </div>
  );
};

export default MainContent;
