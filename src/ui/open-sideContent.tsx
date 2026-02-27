import { RiMenu3Line } from "react-icons/ri";
import { UseMenuContext } from "../hooks/useMenuContext";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseMenuContext();
  return (
    <RiMenu3Line
      className={`fixed top-8 left-8  ${openMenu ? "hidden" : "visible"}`}
      onClick={() => setOpenMenu(true)}
    />
  );
};

export default OpenSideContent;
