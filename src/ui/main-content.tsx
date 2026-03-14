import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDataContext } from "../hooks/use-data-context";
import ChatInput from "./chat-input";

const MainContent = () => {
  const { conversationId } = useParams();
  const [padValue, setPaddingValue] = useState<string>(
    conversationId ? "200px" : "0px",
  );
  const originalPadValue = conversationId ? padValue : "0px";
  const { openMenu } = useDataContext();

  return (
    <div
      className={`px-5 max-md:px-2 ${openMenu ? "ml-60 max-md:ml-0 md:ml-70" : ""}`}
    >
      <div
        className={`mx-auto w-full md:max-w-3xl ${conversationId ? "min-h-dvh pt-14" : "flex h-dvh flex-col items-center justify-center pt-0"}`}
        style={{ paddingBottom: originalPadValue }}
      >
        {/* outlet where the main conversation is loaded into */}
        <Outlet />
        <p
          className={`text-center text-lg tracking-wide md:text-xl ${conversationId ? "hidden" : "block"}`}
        >
          Hello, what can I do for you today?
        </p>
        <ChatInput setPaddingValue={setPaddingValue} />
      </div>
    </div>
  );
};

export default MainContent;
