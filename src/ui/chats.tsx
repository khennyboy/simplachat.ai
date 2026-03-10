import { Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineChat } from "react-icons/hi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";

const Chats = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0.5 pb-10">
      {Array.from({ length: 20 }, (_, index) => {
        const isOpen = openIndex === index;

        return (
          <a
            href="#"
            className="flex gap-2 items-center group relative py-2 px-4 transition-all duration-200 ease-linear rounded-md"
            key={index}
          >
            <HiOutlineChat className="shrink-0" />

            <span className="text-nowrap overflow-hidden text-ellipsis">
              Lorem ipsum dolor sit amet. {index}
            </span>

            <div className="pl-6">
              <Menu.Root
                open={isOpen}
                onOpenChange={(e) => setOpenIndex(e.open ? index : null)}
              >
                <div
                  className={`group-hover:block [@media(hover:none)]:block ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <Menu.Trigger asChild>
                    <IoEllipsisHorizontal />
                  </Menu.Trigger>
                </div>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content
                      unstyled
                      className="outline-none bg-[#484848] py-1  px-1 shadow-xl z-50 rounded-md w-26 *:hover:bg-[#303030] *:hover:rounded-md"
                    >
                      <Menu.Item
                        value="edit-btn"
                        unstyled
                        className="flex items-center gap-1 py-1.5 "
                      >
                        <MdOutlineEdit className="text-blue-600" />
                        <span>Edit</span>
                      </Menu.Item>
                      <Menu.Item
                        value="delete-btn"
                        unstyled
                        className="flex items-center gap-1  py-1.5"
                      >
                        <MdDeleteForever className="text-red-600" />
                        <span>Delete</span>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Chats;
