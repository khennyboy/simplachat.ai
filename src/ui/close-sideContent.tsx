import { IoCloseCircleOutline } from "react-icons/io5";
import { useDataContext } from "../hooks/use-data-context";

const CloseMenu = () => {
  const { setOpenMenu } = useDataContext();
  return (
    <IoCloseCircleOutline
      onClick={() => setOpenMenu(false)}
      className="size-6 cursor-pointer"
    />
  );
};

export default CloseMenu;
