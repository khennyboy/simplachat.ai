import { UseContext } from "../hooks/useContext";
import Chat from "./chats";
import Logos from "./logos";

const SideContent = () => {
  const { openMenu } = UseContext();
  return (
    <aside
      className={`
    bg-chats 
    transition-all duration-300 ease-in-out
    ${openMenu ? "w-80 scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll" : "w-0 overflow-hidden"}
  `}
    >
      <div className="py-4 px-2">
        <Logos />
        <Chat />
      </div>
    </aside>
  );
};

export default SideContent;
