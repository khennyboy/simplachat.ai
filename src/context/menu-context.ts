import { createContext } from "react";

type MenuContextType = {
    openMenu: boolean;
    setOpenMenu: (value: boolean | ((prev: boolean) => boolean)) => void
    // setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};


export const MenuContext = createContext<MenuContextType | undefined>(undefined);
