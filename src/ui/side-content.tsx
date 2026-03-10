import { useEffect } from "react";
import { UseMenuContext } from "../hooks/useMenuContext";
import UseOutsideClick from "../hooks/useOutsideClick";
import Chat from "./chats";
import Logos from "./logos";

const SideContent = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  const sideRef = UseOutsideClick();
  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpenMenu(true);
    }
  }, []);
  return (
    <aside
      ref={sideRef}
      className={`scrollbar-thin bg-chats fixed top-0 left-0 z-50 h-dvh overflow-y-auto scroll-smooth text-sm transition-all duration-300 ease-in-out ${openMenu ? "w-65 md:w-70" : "w-0 overflow-hidden"} `}
    >
      <Logos />
      <Chat />
    </aside>
  );
};

export default SideContent;
