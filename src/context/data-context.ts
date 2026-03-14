import { createContext } from "react";
import type { Chat } from "../hooks/add-chat";

export type titleDatasType = {
  title: string;
  conversationId: string
}

type DataContextType = {
  openMenu: boolean;
  setOpenMenu: (value: boolean | ((prev: boolean) => boolean)) => void;
  titleDatas: titleDatasType[]
  setTitleDatas: React.Dispatch<React.SetStateAction<titleDatasType[]>>;
  currentConversation: Chat[] 
  setCurrentConversation: React.Dispatch<React.SetStateAction<Chat[] >>;
};

export const DataContext = createContext<DataContextType | null>(
  null,
);
