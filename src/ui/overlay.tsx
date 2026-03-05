import { createPortal } from "react-dom";
import { UseMenuContext } from "../hooks/useMenuContext";
const OverLay = () => {
  const { openMenu } = UseMenuContext();
  return createPortal(
    <div className=" fixed top-0 left-0 w-full md:hidden">
      <div
        className={`${openMenu ? "h-screen ml-60 md:ml-70  backdrop-blur-xs bg-backdrop " : ""}`}
      ></div>
    </div>,
    document.body,
  );
};

export default OverLay;
