import { useEffect } from "react";
import { useDataContext } from "../hooks/use-data-context";
import UseOutsideClick from "../hooks/use-outsideclick";
import Chat from "./chats";
import Logos from "./logos";

const SideContent = () => {
  const { openMenu, setOpenMenu } = useDataContext();
  const sideRef = UseOutsideClick();


  // open menu by default on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpenMenu(true);
    }
  }, [setOpenMenu]);

  // close menu whenever route changes
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpenMenu(false);
    }
  }, [setOpenMenu]);

  return (
    <aside
      ref={sideRef}
      className={`scrollbar-thin bg-chats fixed top-0 left-0 z-50 h-dvh overflow-y-auto scroll-smooth transition-all duration-300 ease-in-out ${
        openMenu ? "w-70 md:w-75" : "w-0 overflow-hidden"
      }`}
    >
      <Logos />
      <Chat />
    </aside>
  );
};

export default SideContent;
