import { RiMenu3Line } from "react-icons/ri";
import { UseContext } from "../hooks/useContext";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseContext();
  return (
    <RiMenu3Line
      className={`fixed top-4 left-4 ${openMenu ? "hidden" : "visible"}`}
      onClick={() => setOpenMenu(true)}
    />
  );
};

export default OpenSideContent;
