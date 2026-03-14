import { useContext } from "react";
import { DataContext } from "../context/data-context";

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useMenu must be used inside MenuProvider");
  }
  return context;
};
