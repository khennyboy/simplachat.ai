import { RiMenu3Line } from "react-icons/ri";
import { UseMenuContext } from "../hooks/useMenuContext";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  return (
    <div
      className={`fixed top-4 left-4  ${openMenu ? "hidden" : "visible"}  bg-acive-convo p-1.5`}
    >
      <RiMenu3Line
        className="size-7"
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(true);
        }}
      />
    </div>
  );
};

export default OpenSideContent;
