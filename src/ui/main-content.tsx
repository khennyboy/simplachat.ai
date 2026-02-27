import { useState } from "react";
import Conversation from "./conversation";
import Input from "./input";

const MainContent = () => {
  const [hasText, setHasText] = useState<boolean>(false);
  return (
    <div
      className={`${hasText ? "" : "justify-center items-center "} flex gap-5 flex-col bg-acive-convo  overflow-y-auto scrollbar-thin  flex-1 px-4`}
    >
      <Conversation hasText={hasText} />
      <Input setHasText={setHasText} hasText={hasText} />
    </div>
  );
};

export default MainContent;
