import { useState } from "react";
import { VscSend } from "react-icons/vsc";

const Input = () => {
  const [hasText, setHasText] = useState<boolean>(false);

  return (
    <div
      className={`
        flex p-4 items-center mx-auto mb-5 bg-chats 
         rounded-4xl w-full max-w-2xl 
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
      <VscSend className="cursor-pointer" />
    </div>
  );
};

export default Input;
