import { useEffect, useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";
import { UseMenuContext } from "../hooks/use-menu-context";
import useQuestion from "../hooks/use-question";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "react-router-dom";

type TextFxn = {
  hasText: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
  setPaddingValue: (value: string | ((prev: string) => string)) => void;
};

const ChatInput = ({ setHasText, hasText, setPaddingValue }: TextFxn) => {
  const maindivRef = useRef<HTMLDivElement>(null);
  const outerMostDiv = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [multiline, setMultiline] = useState<boolean>(false);
  const { isPending, getAnswer } = useQuestion(inputRef, setMultiline);
  const { conversationId } = useParams();

  const { openMenu } = UseMenuContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={outerMostDiv}
      className={`bg-active-convo bottom-0 left-0 w-full pt-4 pb-3 ${hasText || conversationId ? `fixed ${openMenu ? "pl-60 max-md:pl-0 md:pl-70" : ""}` : "static pl-0"} } max-md:fixed`}
    >
      <div className="px-5 max-md:px-2">
        <div className="mx-auto w-full max-w-3xl">
          <div
            ref={maindivRef}
            className={`bg-chats mx-auto flex w-full items-center rounded-4xl px-5 shadow-sm transition-all duration-200 ${multiline ? "flex flex-wrap items-center justify-end gap-0 py-1" : "flex items-center justify-between gap-3"}`}
          >
            <TextareaAutosize
              ref={inputRef}
              name="question-box"
              maxRows={4}
              className="scrollbar-thin w-full resize-none scroll-smooth bg-transparent py-4 text-base break-all outline-none placeholder:text-sm placeholder:text-gray-400"
              placeholder="Ask simplachat.ai anything"
              onChange={(e) => {
                const hasContent = e.target.value.trim().length > 0;
                setMultiline((maindivRef.current?.offsetHeight || 1) > 56);
                setHasText(hasContent);
                const height = outerMostDiv.current?.offsetHeight || 0;
                if (conversationId) {
                  setPaddingValue(height + 200 + "px");
                } else {
                  setPaddingValue("0px");
                }
                if(!hasContent){
                  setMultiline(false);
                }
              }}
            />
            <button
              onClick={() => {
                // getAnswer(inputRef.current?.value || "");
                getAnswer();
              }}
              disabled={!hasText || isPending}
              className={`bg-user-bubble flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition hover:opacity-90 active:scale-95 disabled:cursor-not-allowed ${isPending ? "opacity-100" : "disabled:opacity-50"}`}
            >
              {isPending ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <VscSend />
              )}
            </button>
          </div>
          <p className="mt-2 text-center max-md:text-xs">
            Simplechat-ai powered by chatGpt
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
