import { UseContext } from "../hooks/useContext";
import Chat from "./chats";
import Logos from "./logos";

const SideContent = () => {
  const { openMenu } = UseContext();
  return (
    <aside
      className={`
    bg-chats overflow-hidden
    transition-all duration-300 ease-in-out
    ${openMenu ? "w-80" : "w-0"}
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
