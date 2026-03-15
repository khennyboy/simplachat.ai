import { Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDataContext } from "../hooks/use-data-context";
import { getTitleData } from "../hooks/get-title-data";

const Chats = () => {
  const { titleDatas, setTitleDatas } = useDataContext();
  const [openIndex, setOpenIndex] = useState<number | null>();
  const [editingIndex, setEditingIndex] = useState<number | null>();
  const [editingText, setEditingText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete = (conversationId: string) => {
    localStorage.removeItem(conversationId);
    setTitleDatas(getTitleData());
    setOpenIndex(null);
    if (location.pathname.includes(conversationId)) {
      navigate("/");
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditingText(titleDatas[index].title);
  };

  const saveEdit = (conversationId: string) => {
    const newValue = editingText.trim();
    if (!newValue) {
      setEditingIndex(null);
      return;
    }

    const convo = JSON.parse(localStorage.getItem(conversationId) as string);
    convo.title = newValue;
    localStorage.setItem(conversationId, JSON.stringify(convo));
    setTitleDatas(getTitleData());
    setEditingIndex(null);
  };

  return (
    <div className="space-y-1 px-2 pb-10">
      {titleDatas.map((each, index) => {
        const isOpen = openIndex === index;
        const isEditing = editingIndex === index;

        return (
          <NavLink
            key={each.conversationId}
            to={`/c/${each.conversationId}`}
            className={({ isActive }) =>
              `group relative flex items-center justify-between gap-2 rounded-md px-2 py-2 transition-all duration-200 ease-linear ${
                isActive || isEditing ? "bg-chat-hover" : ""
              }`
            }
          >
            {isEditing ? (
              <input
                onChange={(e) => setEditingText(e.target.value)}
                onBlur={() => saveEdit(each.conversationId)}
                autoFocus
                className="w-full border-b text-sm"
              />
            ) : (
              <span className="overflow-hidden text-nowrap text-ellipsis">
                {each.title}
              </span>
            )}

            <Menu.Root
              open={isOpen}
              onOpenChange={(e) => setOpenIndex(e.open ? index : null)}
            >
              <Menu.Trigger asChild>
                <button
                  type="button"
                  className={`flex cursor-pointer items-center pl-2 opacity-0 outline-none group-hover:opacity-100 [@media(hover:none)]:opacity-100 ${openIndex == index ? "opacity-100" : "opacity-0"}`}
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
                        handleDelete(each.conversationId);
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
      })}
    </div>
  );
};

export default Chats;
