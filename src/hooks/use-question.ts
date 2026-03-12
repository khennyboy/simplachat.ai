import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import getConversationId from "./get-random-number";
import AddChat from "./add-chat";
import type { RefObject } from "react";
import useTitles, { getTitle } from "./use-title";

type TData = string;
type setMultiline = (value: boolean | ((prev: boolean) => boolean)) => void;
const useQuestion = (inputRef: RefObject<HTMLTextAreaElement | null>, setMultiline: setMultiline) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTitleData } = useTitles()
  const {
    mutate: getAnswer,
    isPending,
    isError,
    error,
    data,
  } = useMutation<TData>({
    mutationFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("life is good");
        }, 2000);
      }),

    onSuccess: (data) => {
      let conversationId;

      if (!location.pathname.includes("/c/")) {
        conversationId = getConversationId();
        navigate(`/c/${conversationId}`);
      }
      else {
        conversationId = location.pathname.slice(3)
      }

      AddChat(conversationId, {
        question: "what is energy",
        answer: data,
      });
      setTitleData(getTitle())
    },

    onSettled: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        setMultiline(false)
      }
    },
  });

  return { getAnswer, isPending, isError, error, data };
};

export default useQuestion;