import { VscSend } from "react-icons/vsc";

type TextFxn = {
  hasText: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
  // setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input = ({ hasText, setHasText }: TextFxn) => {
  return (
    <div
      className={`${hasText? 'sticky bottom-0 ':''}
        flex p-4 items-center mx-auto mb-5 bg-chats 
         rounded-4xl w-full max-w-2xl border-2 border-gray-500
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
          console.log(hasText);
        }}
      />
      <VscSend className="cursor-pointer" />
    </div>
  );
};

export default Input;
