import { useMutation } from "@tanstack/react-query";

const useQuestion = () => {
  const {
    mutate: getAnswer,
    isPending,
    isError,
    error,
    data
  } = useMutation({
    mutationFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("life is good");
        }, 2000);
      }),
    onSuccess: () => {
      console.log('success')
    },
  });
  return { getAnswer, isPending, isError, error, data };
};

export default useQuestion;
