import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { UseMenuContext } from "../hooks/use-menu-context";
import ChatInput from "./chat-input";

const MainContent = () => {
  const [hasText, setHasText] = useState<boolean>(false);
  const [padValue, setPaddingValue] = useState<string>("0px");
  const { openMenu } = UseMenuContext();
  const { conversationId } = useParams();
  return (
    <div
      className={`px-5 max-md:px-2 ${openMenu ? "ml-60 max-md:ml-0 md:ml-70" : ""}`}
    >
      <div
        className={`mx-auto w-full md:max-w-3xl ${conversationId ? "pt-14 min-h-dvh" : "flex h-dvh flex-col items-center justify-center pt-0"}`}
        style={{ paddingBottom: padValue }}
      >
        {/* outlet where the main conversation is loaded into */}
        <Outlet />
        <p
          className={`text-center text-lg tracking-wide md:text-xl ${conversationId && (hasText || conversationId) ? "hidden" : "block"}`}
        >
          Hello, what can I do for you today?
        </p>
        <ChatInput
          setHasText={setHasText}
          hasText={hasText}
          setPaddingValue={setPaddingValue}
        />
      </div>
    </div>
  );
};

export default MainContent;
