import { RiMenu3Line } from "react-icons/ri";
import { UseMenuContext } from "../hooks/useMenuContext";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  return (
    <div
      className={`fixed top-2 left-2 ${openMenu ? "hidden" : "visible"} w-full bg-active-convo py-2 `}
    >
      <RiMenu3Line
        className="size-7 ml-2"
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(true);
        }}
      />
    </div>
  );
};

export default OpenSideContent;
