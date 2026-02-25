import { Bars3Icon } from "@heroicons/react/24/outline";
import { UseContext } from "../hooks/useContext";

const OpenSideContent = () => {
  const { openMenu, setOpenMenu } = UseContext();
  return (
    <Bars3Icon
      className={`fixed top-4 left-4 ${openMenu ? "hidden" : "visible"}`}
      onClick={() => setOpenMenu(true)}
    />
  );
};

export default OpenSideContent;
