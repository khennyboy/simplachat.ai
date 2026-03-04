import { HiOutlineChat } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Chats = () => {
  return (
    <div className="space-y-0.5 pb-20">
      {" "}
      {Array.from({ length: 20 }, (_, index) => {
        return (
          <a
            href="#"
            className=" flex gap-2 items-center group relative p-2 transition-all duration-200 ease-linear  rounded-md"
            key={index}
          >
            <HiOutlineChat className="shrink-0" />
            <span className="text-nowrap overflow-hidden text-ellipsis">
              Lorem ipsum dolor sit amet. {index}
            </span>

            <div className="gap-2 right-2 hidden group-hover:flex [@media(hover:none)]:flex ">
              <MdOutlineEdit className="text-blue-800  rounded-sm " />
              <MdDeleteForever className="text-red-600 rounded-sm" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Chats;
