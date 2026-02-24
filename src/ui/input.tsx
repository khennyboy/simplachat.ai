import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Input = () => {
  const [hasText, setHasText] = useState<boolean>(false);

  return (
    <div
      className={`
        flex p-4 items-center mx-2 mb-5 bg-chats 
         rounded-4xl
        transition-all duration-200 ease-linear
      `}
    >
      <input
        className="flex-1 outline-none placeholder:text-gray-400"
        type="text"
        name="question"
        placeholder="Ask simplachat.ai anything"
        onChange={(e) => {
          setHasText(e.target.value.trim().length > 0);
          console.log(e.target.value.trim().length);
          console.log(hasText);
        }}
      />
      <PaperAirplaneIcon className="cursor-pointer" />
    </div>
  );
};

export default Input;
