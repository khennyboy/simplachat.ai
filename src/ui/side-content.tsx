import { UseMenuContext } from "../hooks/useMenuContext";
import Chat from "./chats";
import Logos from "./logos";

const SideContent = () => {
  const { openMenu } = UseMenuContext();
  return (
    <aside
      className={`
    bg-chats z-50 h-screen
    transition-all duration-300 ease-in-out max-md:fixed left-0 top-0
    ${openMenu ? "w-60 md:w-70 overflow-y-auto scrollbar-thin scroll-smooth will-change-transform" : "w-0 overflow-hidden"}
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
