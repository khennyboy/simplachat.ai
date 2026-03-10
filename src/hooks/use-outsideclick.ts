import { useEffect, useRef } from "react";
import { UseMenuContext } from "./use-menu-context";

const UseOutsideClick = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  const sideRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (sideRef.current && !sideRef.current.contains(e.target as Node)) {
        if (openMenu && window.innerWidth < 768) {
          setOpenMenu(false);
        }
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [openMenu, setOpenMenu]);
  return sideRef;
};

export default UseOutsideClick;
