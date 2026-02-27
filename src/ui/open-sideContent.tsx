import { RiMenu3Line } from "react-icons/ri";
import { UseMenuContext } from "../hooks/useMenuContext";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  return (
    <RiMenu3Line
      className={`fixed top-4 left-4  ${openMenu ? "hidden" : "visible"}`}
      onClick={() => setOpenMenu(true)}
    />
  );
};

export default OpenSideContent;
