import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getConversationId from "./get-random-number";
import AddChat from "./add-chat";
import type { RefObject } from "react";

type TData = string;

const useQuestion = (inputRef: RefObject<HTMLTextAreaElement | null>) => {
  const navigate = useNavigate();

  const {
    mutate: getAnswer,
    isPending,
    isError,
    error,
    data,
  } = useMutation<TData>({
    mutationFn: () =>
      new Promise<TData>((resolve) => {
        setTimeout(() => {
          resolve("life is good");
        }, 2000);
      }),

    onSuccess: (data) => {
      const id = getConversationId();
      navigate(`/c/${id}`);
      AddChat(id, { question: "what is energy", answer: data });
    },

    onSettled: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  });

  return { getAnswer, isPending, isError, error, data };
};

export default useQuestion;