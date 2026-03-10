import { IoCloseCircleOutline } from "react-icons/io5";
import { UseMenuContext } from "../hooks/use-menu-context";

const CloseMenu = () => {
  const { setOpenMenu } = UseMenuContext();
  return (
    <IoCloseCircleOutline
      onClick={() => setOpenMenu(false)}
      className="size-6 cursor-pointer"
    />
  );
};

export default CloseMenu;
