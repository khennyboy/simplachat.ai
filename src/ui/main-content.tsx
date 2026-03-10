import { useState } from "react";
import ChatInput from "./chat-input";
import Conversation from "./conversation";
import { UseMenuContext } from "../hooks/useMenuContext";
import OverLay from "./overlay";

const MainContent = () => {
  const [hasText, setHasText] = useState<boolean>(false);
  const [padValue, setPaddingValue] = useState<string>("0px");
  const { openMenu } = UseMenuContext();
  return (
    <div
      className={`px-5 max-md:px-2 ${openMenu ? "ml-60 max-md:ml-0 md:ml-70" : ""}`}
    >
      <div
        className={`mx-auto w-full md:max-w-2xl ${hasText ? "pt-12" : "flex h-dvh flex-col items-center justify-center pt-0"}`}
        style={{ paddingBottom: padValue }}
      >
        <Conversation hasText={hasText} />
        <ChatInput
          setHasText={setHasText}
          hasText={hasText}
          setPaddingValue={setPaddingValue}
        />
      </div>
      <OverLay />
    </div>
  );
};

export default MainContent;
