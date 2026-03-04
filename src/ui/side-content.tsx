import { UseMenuContext } from "../hooks/useMenuContext";
import UseOutsideClick from "../hooks/useOutsideClick";
import Chat from "./chats";
import Logos from "./logos";

const SideContent = () => {
  const { openMenu } = UseMenuContext();
  const  sideRef  = UseOutsideClick();
  return (
    <aside
      ref={sideRef}
      className={`
     z-50 h-dvh  scrollbar-thin scroll-smooth fixed overflow-y-auto bg-chats 
    transition-all duration-300 ease-in-out left-0 top-0
    ${openMenu ? "w-60 md:w-70 " : "w-0 overflow-hidden"}
  `}
    >
      <Logos />
      <Chat />
    </aside>
  );
};

export default SideContent;
