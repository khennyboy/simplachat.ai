import { useCallback, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTitleData } from "../hooks/get-title-data";
import { useDataContext } from "../hooks/use-data-context";
import ChatItem from "./chat-item";

const Chats = () => {
  const { titleDatas, setTitleDatas } = useDataContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!openMenu && editingIndex) {
  //     setEditingIndex(null);
  //     // return () => clearTimeout(timeout);
  //   }
  // }, [openMenu]);

  const handleDelete = useCallback(
    (conversationId: string) => {
      localStorage.removeItem(conversationId);
      setTitleDatas(getTitleData());
      setOpenIndex(null);

      if (location.pathname.includes(conversationId)) {
        navigate("/");
      }
    },
    [location.pathname, navigate, setTitleDatas],
  );

  const handleEdit = useCallback((index: number) => {
    setEditingIndex(index);
  }, []);

  const saveEdit = useCallback(
    (conversationId: string) => {
      const updatedTitle = inputRef.current?.value.trim();

      if (!updatedTitle) {
        setEditingIndex(null);
        setOpenIndex(null);
        return;
      }

      const convo = JSON.parse(localStorage.getItem(conversationId) as string);
      convo.title = updatedTitle;

      localStorage.setItem(conversationId, JSON.stringify(convo));
      setTitleDatas(getTitleData());

      setEditingIndex(null);
      setOpenIndex(null);
    },
    [setTitleDatas],
  );

  return (
    <div className="space-y-1 px-2 pb-10">
      {titleDatas.map((chat, index) => (
        <ChatItem
          key={chat.conversationId}
          chat={chat}
          index={index}
          openIndex={openIndex}
          editingIndex={editingIndex}
          setOpenIndex={setOpenIndex}
          inputRef={inputRef}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          saveEdit={saveEdit}
        />
      ))}
    </div>
  );
};

export default Chats;
