import { HiOutlineChat } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Chats = () => {
  return (
    <div className="space-y-4 mt-4">
      <h4>Conversations</h4>
      <div className="space-y-2.5">
        {" "}
        {Array.from({ length: 20 }, (_, index) => {
          return (
            <a
              href="#"
              className="flex gap-2 items-center group relative p-3 rounded-lg bg-gray-800 transition-all duration-200 ease-linear"
              key={index}
            >
              <HiOutlineChat />
              <span>Lorem ipsum dolor sit amet. {index}</span>

              <div className="hidden absolute gap-2 group-hover:flex right-2 ">
                <MdOutlineEdit className="text-blue-800 bg-gray-300 rounded-sm "/>
                <MdDeleteForever className="text-red-600 bg-gray-300 rounded-sm"/>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
