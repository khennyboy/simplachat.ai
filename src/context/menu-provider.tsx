import { useState, type ReactNode } from "react";
import { MenuContext } from "./menu-context";

type MenuProviderProps = {
  children: ReactNode;
};

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
