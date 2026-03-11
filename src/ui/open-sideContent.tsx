import { RiMenu3Line } from "react-icons/ri";
import { UseMenuContext } from "../hooks/use-menu-context";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  return (
    <div
      className={`fixed top-0 left-2 ${openMenu ? "hidden" : "visible"} bg-active-convo w-full cursor-pointer py-2`}
    >
      <RiMenu3Line
        className="ml-2 mt-2 size-7"
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(true);
        }}
      />
    </div>
  );
};

export default OpenSideContent;
