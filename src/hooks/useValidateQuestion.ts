import { BAD_WORDS } from "../constants/restricted-words";

export const useValidateQuestion = () => {
  const validateQuestion = (question: string) => {
    const lowercaseQuestion = question.toLowerCase();

    const hasBadWord = BAD_WORDS.some((word) =>
      lowercaseQuestion.includes(word.toLowerCase())
    );

    return !hasBadWord;
  };

  return { validateQuestion };
};
