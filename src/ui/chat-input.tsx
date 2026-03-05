import { useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";
import { UseMenuContext } from "../hooks/useMenuContext";

type TextFxn = {
  hasText?: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
  setPaddingValue: (value: string | ((prev: string) => string)) => void;
};

const ChatInput = ({ setHasText, setPaddingValue, hasText }: TextFxn) => {
  const maindivRef = useRef<HTMLDivElement>(null);
  const divareaRef = useRef<HTMLDivElement>(null);
  const [multiline, setMultiline] = useState<boolean | undefined>(false);
  const { openMenu } = UseMenuContext();
  return (
    <div
      ref={divareaRef}
      className={`w-full  bg-active-convo left-0 bottom-0 py-5 ${hasText ? `fixed ${openMenu ? "max-md:pl-0 pl-60 md:pl-70" : ""}` : "static pl-0"} max-md:fixed }`}
    >
      <div className="max-w-2xl  w-full mx-auto px-5 md:px-2">
        <div
          ref={maindivRef}
          className={`flex items-center 
              px-5 w-full
              rounded-4xl  bg-chats
              shadow-sm mx-auto
              transition-all duration-200
              
               ${multiline ? "flex-wrap justify-end gap-0 py-1" : "justify-between gap-3"}`}
        >
          <TextareaAutosize
            name="question-box"
            maxRows={4}
            className="
                bg-transparent w-full
                outline-none
                resize-none
                text-base py-4 break-all 
                 placeholder:text-sm
                placeholder:text-gray-400 scrollbar-thin scroll-smooth
              "
            placeholder="Ask simplachat.ai anything"
            onChange={(e) => {
              const hasContent = e.target.value.trim().length > 0;
              setMultiline((maindivRef.current?.offsetHeight || 1) > 56);
              setHasText(hasContent);
              const height = divareaRef.current?.offsetHeight || 0;
              if (hasContent) {
                setPaddingValue(height + 100 + "px");
              } else {
                setPaddingValue("0px");
              }
            }}
          />
          <button
            className="
                flex items-center justify-center 
                h-10 w-10 shrink-0
                rounded-full
                bg-user-bubble
                text-white
                hover:opacity-90
                active:scale-95
                transition cursor-pointer
              "
          >
            <VscSend />
          </button>
        </div>
        <p className="text-center mt-1">Simplechat-ai powered by chatGpt</p>
      </div>
    </div>
  );
};

export default ChatInput;
