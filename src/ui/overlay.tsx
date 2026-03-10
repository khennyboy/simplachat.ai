import { createPortal } from "react-dom";
import { UseMenuContext } from "../hooks/useMenuContext";
const OverLay = () => {
  const { openMenu } = UseMenuContext();
  return createPortal(
    <div className="fixed top-0 left-0 w-full md:hidden">
      <div
        className={`${openMenu ? "bg-backdrop ml-60 h-screen backdrop-blur-xs md:ml-70" : ""}`}
      ></div>
    </div>,
    document.body,
  );
};

export default OverLay;
