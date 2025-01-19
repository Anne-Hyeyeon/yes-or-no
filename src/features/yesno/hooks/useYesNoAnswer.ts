import { useMemo } from "react";
import { YES_ANSWERS, NO_ANSWERS, INVALID_MESSAGE } from "../constants";
import { getRandomItem } from "../../../utils/random";
import { useValidateQuestion } from "../../../hooks/useValidateQuestion";
import { useRandomBunny } from "./useRandomBunny";

export function useYesNoAnswer(question: string) {
  const { validateQuestion } = useValidateQuestion();

  const isValid = useMemo(
    () => validateQuestion(question),
    [question, validateQuestion]
  );

  const result = useMemo(() => {
    if (!isValid) {
      return {
        isYes: false,
        answer: INVALID_MESSAGE,
        isValid: false,
      };
    }

    const isYes = Math.random() < 0.5;
    const answer = isYes
      ? getRandomItem(YES_ANSWERS)
      : getRandomItem(NO_ANSWERS);

    return {
      isYes,
      answer,
      isValid: true,
    };
  }, [isValid]);

  const randomBunnyImage = useRandomBunny(result.isYes);

  return {
    ...result,
    randomBunnyImage,
  };
}
