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
      className={`px-5 max-md:px-2  ${openMenu ? "max-md:ml-0 ml-60 md:ml-70" : ""}`}
    >
      <div
        className={`w-full md:max-w-2xl mx-auto ${hasText ? "pt-12 " : "h-lvh flex-col flex items-center justify-center pt-0 "}`}
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
