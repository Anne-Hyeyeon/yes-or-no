import { useMemo } from "react";
import { getRandomItem } from "../../../utils/random";
import bunny1 from "../../../assets/images/multi-choice/multi-choice-bunny/lying-bunny.jpeg";
import bunny2 from "../../../assets/images/multi-choice/multi-choice-bunny/point-bunny.jpeg";
import { MULTI_CHOICE_ANSWERS } from "../constants";

export function useMultiChoiceAnswer(choices: string[]) {
  const result = useMemo(() => {
    if (choices.length === 0) {
      return {
        selectedIndex: -1,
        choice: "선택지가 없습니다. 다시 입력해 주세요!",
      };
    }

    const selectedChoice = getRandomItem(choices);
    const selectedIndex = choices.indexOf(selectedChoice);
    const choice = `${selectedIndex + 1}번! \n${selectedChoice}`;
    const answer = getRandomItem(MULTI_CHOICE_ANSWERS);

    return {
      selectedIndex,
      choice,
      answer,
    };
  }, [choices]);

  const randomBunnyImage = useMemo(() => {
    const bunnyImages = [bunny1, bunny2];
    return getRandomItem(bunnyImages);
  }, []);

  return {
    ...result,
    randomBunnyImage,
  };
}
