import { Menu, Portal } from "@chakra-ui/react";
import { memo } from "react";
import { FaRegSave } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";

type Chat = {
  title: string;
  conversationId: string;
};

type ChatItemProps = {
  chat: Chat;
  index: number;
  openIndex: number | null;
  editingIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleDelete: (conversationId: string) => void;
  handleEdit: (index: number) => void;
  saveEdit: (conversationId: string) => void;
};

const ChatItem = memo(
  ({
    chat,
    index,
    openIndex,
    editingIndex,
    setOpenIndex,
    inputRef,
    handleDelete,
    handleEdit,
    saveEdit,
  }: ChatItemProps) => {
    const isOpen = openIndex === index;
    const isEditing = editingIndex === index;

    if (isEditing) {
      return (
        <div className="flex items-center gap-2">
          <input
            defaultValue={chat.title}
            ref={inputRef}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveEdit(chat.conversationId);
              }
            }}
            className="flex-1 rounded-md border border-neutral-700 bg-transparent px-2 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              saveEdit(chat.conversationId);
            }}
            className="cursor-pointer rounded-md bg-neutral-700 p-1"
          >
            <FaRegSave className="size-5" />
          </button>
        </div>
      );
    }

    return (
      <NavLink
        to={`/c/${chat.conversationId}`}
        className={({ isActive }) =>
          `group flex items-center justify-between gap-2 rounded-md px-2 py-2 ${
            isActive ? "bg-chat-hover" : ""
          }`
        }
      >
        <span className="overflow-hidden text-nowrap text-ellipsis">
          {chat.title}
        </span>

        <Menu.Root
          open={isOpen}
          onOpenChange={(e) => {
            setOpenIndex(e.open ? index : null);
          }}
        >
          <Menu.Trigger asChild>
            <button
              type="button"
              className={`flex cursor-pointer items-center pl-2 opacity-0 outline-none group-hover:opacity-100 [@media(hover:none)]:opacity-100 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenIndex(index);
              }}
            >
              <IoEllipsisHorizontal />
            </button>
          </Menu.Trigger>

          <Portal>
            <Menu.Positioner>
              <Menu.Content
                unstyled
                className="z-50 w-26 rounded-md bg-black px-1 py-2 shadow-xl outline-none *:hover:rounded-md *:hover:bg-[#303030]"
              >
                <Menu.Item
                  value="edit-btn"
                  unstyled
                  className="flex cursor-pointer items-center gap-1 py-1.5"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleEdit(index);
                  }}
                >
                  <MdOutlineEdit className="text-blue-600" />
                  <span>Edit</span>
                </Menu.Item>

                <Menu.Item
                  value="delete-btn"
                  unstyled
                  className="flex cursor-pointer items-center gap-1 py-1.5"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDelete(chat.conversationId);
                  }}
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
  },
);

export default ChatItem;
