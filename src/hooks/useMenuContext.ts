import { useContext } from "react";
import { MenuContext } from "../context/menu-context";

export const UseMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used inside MenuProvider");
    }
    return context;
};