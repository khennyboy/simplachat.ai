import { IoCloseCircleOutline } from "react-icons/io5";
import { UseMenuContext } from "../hooks/useMenuContext";

const CloseMenu = () => {
  const { setOpenMenu } = UseMenuContext();
  return <IoCloseCircleOutline onClick={() => setOpenMenu(false)} className="size-8"/>;
};

export default CloseMenu;
