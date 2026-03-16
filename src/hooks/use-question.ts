import { useMutation } from "@tanstack/react-query";
import type { RefObject } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddChat from "./add-chat";
import getConversationId from "./get-random-number";
import { getTitleData } from "./get-title-data";
import { useDataContext } from "./use-data-context";
import { getCurrentConversation } from "./get-current-conversation";
import { sendPromptToLlama } from "../services/question";


type useQuestionData = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
  setMultiline: (value: boolean | ((prev: boolean) => boolean)) => void;
  setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
}


const useQuestion = ({ inputRef, setMultiline, setHasText }: useQuestionData) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTitleDatas, setCurrentConversation } = useDataContext()
  const {
    mutate: getAnswer,
    isPending,
    isError,
    error,
    data,
  } = useMutation<string, Error, string>({
    mutationFn: sendPromptToLlama,
    // new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, doloribus eligendi reiciendis, reprehenderit esse fugit cupiditate non eos similique nemo sint laudantium ratione porro culpa sit, repellendus molestiae ex provident!");
    //   }, 2000);
    // }),

    onSuccess: (data, question) => {
      let conversationId;

      if (!location.pathname.includes("/c/")) {
        conversationId = getConversationId();
        navigate(`/c/${conversationId}`);
      }
      else {
        conversationId = location.pathname.slice(3)
      }

      AddChat(conversationId, {
        question,
        answer: data,
      });

      setTitleDatas(getTitleData())
      setCurrentConversation(getCurrentConversation(conversationId))
    },

    onSettled: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        // inputRef.current?.focus();
        setMultiline(false)
        setHasText(false)
      }
    },
  });

  return { getAnswer, isPending, isError, error, data };
};

export default useQuestion;