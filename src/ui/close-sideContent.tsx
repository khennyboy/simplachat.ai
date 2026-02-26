import { IoCloseCircleOutline } from "react-icons/io5";
import { UseContext } from "../hooks/useContext";

const CloseMenu = () => {
  const { setOpenMenu } = UseContext();
  return <IoCloseCircleOutline onClick={() => setOpenMenu(false)} className="size-8"/>;
};

export default CloseMenu;
