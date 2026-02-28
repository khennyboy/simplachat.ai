import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { VscSend } from "react-icons/vsc";

type TextFxn = {
  hasText?: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const Input = ({ setHasText }: TextFxn) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className="
        w-11/12 max-w-2xl mx-auto mb-5
        fixed md:relative bottom-0
      "
    >
      <div
        className="
          flex items-end gap-3
          bg-chats
          px-5 py-3
          rounded-3xl
          shadow-sm
          transition-all duration-200
          focus-within:ring-2 focus-within:ring-border-glow
        "
      >
        <TextareaAutosize
          ref={textareaRef}
          maxRows={8}
          className="
            flex-1
            bg-transparent
            outline-none
            resize-none
            text-base
            leading-relaxed
            placeholder:text-gray-400
            overflow-hidden
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
          <VscSend  />
        </button>
      </div>
    </div>
  );
};

export default Input;