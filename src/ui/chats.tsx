import { HiOutlineChat } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Chats = () => {
  return (
    <div className="space-y-4 mt-4">
      <h4>Conversations</h4>
      <div className="space-y-2.5">
        {" "}
        {Array.from({ length: 10 }, (_, index) => {
          return (
            <a
              href="#"
              className="flex gap-2 group relative p-3 rounded-lg bg-gray-800 transition-all duration-200 ease-linear"
              key={index}
            >
              <HiOutlineChat />
              <span>New Chat {index}</span>

              <div className="hidden absolute gap-2 group-hover:flex right-2">
                <MdOutlineEdit />
                <MdDeleteForever />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
