import { XCircleIcon } from "@heroicons/react/24/outline";
import { UseContext } from "../hooks/useContext";

const CloseMenu = () => {
  const { setOpenMenu } = UseContext();
  return <XCircleIcon onClick={() => setOpenMenu(false)} className="size-8"/>;
};

export default CloseMenu;
