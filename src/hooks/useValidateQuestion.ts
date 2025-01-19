export const useValidateQuestion = () => {
  const validateQuestion = (question: string) => {
    const lowercaseQuestion = question.toLowerCase();
    const restrictedWords =
      import.meta.env.VITE_RESTRICTED_WORDS?.split(",") || [];

    const hasBadWord = restrictedWords.some((word: string) =>
      lowercaseQuestion.includes(word.toLowerCase())
    );

    return !hasBadWord;
  };

  return { validateQuestion };
};
