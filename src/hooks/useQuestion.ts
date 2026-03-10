import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendPromptToLlama } from "../services/question";

const useQuestion = () => {
  const queryClient = useQueryClient();
  const {
    mutate: getAnswer,
    isPending,
    isError,
    error,
    data
  } = useMutation({
    mutationFn: sendPromptToLlama,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
    },
  });
  return { getAnswer, isPending, isError, error, data };
};

export default useQuestion;
