import { useRef } from "react";
import { VscSend } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";

type TextFxn = {
  hasText?: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
  setPaddingValue: (value: string | ((prev: string) => string)) => void;
};

const ChatInput = ({ setHasText, setPaddingValue, hasText }: TextFxn) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const divareaRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={divareaRef}
      className={`w-full bg-acive-convo px-5 max-md:px-2 left-0 bottom-0 py-5 ${hasText ? "fixed" : "static"} max-md:fixed
       `}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div
          className="
              flex items-center gap-3
              bg-chats justify-between
              px-5
              rounded-4xl
              shadow-sm
              transition-all duration-200
              focus-within:ring-2 focus-within:ring-border-glow
            "
        >
          <TextareaAutosize
            name="question-box"
            ref={textareaRef}
            maxRows={6}
            className="
                bg-transparent w-full
                outline-none
                resize-none
                text-base py-4
                leading-relaxed
                placeholder:text-gray-400 scrollbar-thin scroll-smooth
              "
            placeholder="Ask simplachat.ai anything"
            onChange={(e) => {
              const value = e.target.value.trim();
              const hasContent = value.length > 0;
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
                transition
              "
          >
            <VscSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
