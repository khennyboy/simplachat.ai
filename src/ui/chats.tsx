import { Menu, Portal } from "@chakra-ui/react";
import { HiOutlineChat } from "react-icons/hi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";

const Chats = () => {
  return (
    <div className="space-y-0.5 pb-20">
      {Array.from({ length: 20 }, (_, index) => {
        return (
          <a
            href="#"
            className="flex gap-2 items-center group relative p-2 transition-all duration-200 ease-linear rounded-md"
            key={index}
          >
            <HiOutlineChat className="shrink-0" />

            <span className="text-nowrap overflow-hidden text-ellipsis">
              Lorem ipsum dolor sit amet. {index}
            </span>

            <Menu.Root>
              <div className="opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                <Menu.Trigger asChild>
                  <IoEllipsisHorizontal />
                </Menu.Trigger>
              </div>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item
                      value="edit-btn"
                      className="flex items-center gap-2 px-3 py-2 hover:bg-blue-600 hover:text-white"
                    >
                      <MdOutlineEdit className="text-white" />
                      <span>Edit</span>
                    </Menu.Item>

                    <Menu.Item
                      value="delete-btn"
                      className="flex items-center gap-2 px-3 py-2 hover:bg-red-600 hover:text-white"
                    >
                      <MdDeleteForever className="text-white" />
                      <span>Delete</span>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </a>
        );
      })}
    </div>
  );
};

export default Chats;
