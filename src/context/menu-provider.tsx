import { useEffect, useState, type ReactNode } from "react";
import { MenuContext } from "./menu-context";

type MenuProviderProps = {
  children: ReactNode;
};

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    function getWindowWidth() {
      if (window.innerWidth > 767) {
        setOpenMenu(true);
      } else {
        setOpenMenu(false);
      }
    }
    window.addEventListener("resize", getWindowWidth);
    return () => window.removeEventListener("resize", getWindowWidth);
  }, [openMenu]);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
