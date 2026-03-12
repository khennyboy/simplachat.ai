import { Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import useTitles from "../hooks/use-title";

const Chats = () => {
  const { titleData } = useTitles();
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <div className="px-2 pb-10">
      {titleData.map((each, index) => {
        const isOpen = openIndex === index;
        return (
          <Link
            to={`/c/${each.conversationId}`}
            className="group relative flex items-center justify-between gap-2 rounded-md px-2 py-2 transition-all duration-200 ease-linear"
            key={index}
          >
            <span className="overflow-hidden text-nowrap text-ellipsis">
              {each.title}
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
                      className="bg-chat-hover z-50 w-26 rounded-md px-1 py-1 shadow-xl outline-none *:hover:rounded-md *:hover:bg-[#303030]"
                    >
                      <Menu.Item
                        value="edit-btn"
                        unstyled
                        className="flex items-center gap-1 py-1.5"
                      >
                        <MdOutlineEdit className="text-blue-600" />
                        <span>Edit</span>
                      </Menu.Item>
                      <Menu.Item
                        value="delete-btn"
                        unstyled
                        className="flex items-center gap-1 py-1.5"
                      >
                        <MdDeleteForever className="text-red-600" />
                        <span>Delete</span>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Chats;
