import { VscSend } from "react-icons/vsc";

type TextFxn = {
  hasText?: boolean;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
  // setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input = ({ setHasText }: TextFxn) => {
  return (
    <div
      className="
        flex px-4 py-5 items-center mx-auto mb-5 bg-chats 
         rounded-4xl w-11/12 max-w-2xl fixed md:relative bottom-0 
        transition-all  duration-200 ease-linear 
      "
    >
      <input
        className="flex-1 outline-none placeholder:opacity-80 placeholder:text-base "
        type="text"
        name="question"
        placeholder="Ask simplachat.ai anything"
        onChange={(e) => {
          setHasText(e.target.value.trim().length > 0);
        }}
      />
      <VscSend className="cursor-pointer" />
    </div>
  );
};

export default Input;
