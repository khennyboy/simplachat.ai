import { useState } from "react";
import Conversation from "./conversation";
import Input from "./input";

const MainContent = () => {
  const [hasText, setHasText] = useState<boolean>(false);
  return (
    <div
      className="flex justify-center items-center gap-5 flex-col overflow-y-auto scrollbar-thin flex-1 px-4"
    >
      <Conversation hasText={hasText} />
      <Input setHasText={setHasText}  />
    </div>
  );
};

export default MainContent;
