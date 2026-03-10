import { useMutation } from "@tanstack/react-query";
import { sendPromptToLlama } from "../services/question";

const useQuestion = () => {
  // const queryClient = useQueryClient();
  const {
    mutate: getAnswer,
    isPending,
    isError,
    error,
    data
  } = useMutation({
    mutationFn: sendPromptToLlama,
    onSuccess: () => {
      console.log('success')
    },
  });
  return { getAnswer, isPending, isError, error, data };
};

export default useQuestion;
