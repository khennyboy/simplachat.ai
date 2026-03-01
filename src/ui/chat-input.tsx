import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { VscSend } from "react-icons/vsc";

type TextFxn = {
  hasText?: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const ChatInput = ({ setHasText }: TextFxn) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className="
        w-11/12 max-w-2xl mx-auto 
        fixed md:relative bottom-4
      "
    >
      <div
        className="
          flex flex-wrap items-center gap-3 
          bg-chats justify-end
          px-5 py-3 
          rounded-3xl
          shadow-sm
          transition-all duration-200
          focus-within:ring-2 focus-within:ring-border-glow 
        "
      >
        <TextareaAutosize
          name="question-box"
          ref={textareaRef}
          maxRows={8}
          className="
            bg-transparent w-full 
            outline-none
            resize-none
            text-base
            leading-relaxed
            placeholder:text-gray-400 scrollbar-thin scroll-smooth
          "
          placeholder="Ask simplachat.ai anything"
          onChange={(e) => {
            setHasText(e.target.value.trim().length > 0);
          }}
        />

        <button
          className="
            flex items-center justify-center
            h-10 w-10
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
  );
};

export default ChatInput;
