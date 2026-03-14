import { Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../hooks/use-data-context";

const Chats = () => {
  const { titleDatas } = useDataContext();
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <div className="relative space-y-1 px-2 pb-10">
      {titleDatas.map((each, index) => {
        const isOpen = openIndex === index;

        return (
          <NavLink
            key={index}
            to={`/c/${each.conversationId}`}
            className={({ isActive }) =>
              `group relative flex items-center justify-between gap-2 rounded-md px-2 py-2 transition-all duration-200 ease-linear ${
                isActive ? "bg-chat-hover" : ""
              }`
            }
          >
            {/* Chat title */}
            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {each.title}
            </span>

            {/* Ellipsis menu trigger */}
            <Menu.Root
              open={isOpen}
              onOpenChange={(e) => setOpenIndex(e.open ? index : null)}
            >
              <Menu.Trigger >
                <button
                  type="button"
                  className="cursor-pointer p-1 opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    // e.preventDefault(); 
                    console.log("a")
                    e.stopPropagation(); 
                  }}
                >
                  <IoEllipsisHorizontal />
                </button>
              </Menu.Trigger>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content
                    unstyled
                    className="bg-black z-50 w-28 rounded-md px-1 py-1 shadow-xl outline-none *:hover:rounded-md *:hover:bg-[#303030]"
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
          </NavLink>
        );
      })}
    </div>
  );
};

export default Chats;
