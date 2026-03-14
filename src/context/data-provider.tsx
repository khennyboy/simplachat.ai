import { useState, type ReactNode } from "react";
import type { Chat } from "../hooks/add-chat";
import { getCurrentConversation } from "../hooks/get-current-conversation";
import { getTitleData } from "../hooks/get-title-data";
import { DataContext, type titleDatasType } from "./data-context";

type DataProviderProps = {
  children: ReactNode;
};

const DataProvider = ({ children }: DataProviderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [titleDatas, setTitleDatas] =
    useState<titleDatasType[]>(getTitleData());
  const [currentConversation, setCurrentConversation] = useState<Chat[]>(
    getCurrentConversation(""),
  );

  return (
    <DataContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        titleDatas,
        setTitleDatas,
        currentConversation,
        setCurrentConversation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
