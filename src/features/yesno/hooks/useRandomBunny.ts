import { useMemo } from "react";

import bunny1 from "../../../assets/images/yesno/yes-bunny/go-go-bunny.jpeg";
import bunny2 from "../../../assets/images/yesno/yes-bunny/thumbs-up-bunny.jpeg";
import bunny3 from "../../../assets/images/yesno/yes-bunny/yes-motion-bunny.jpeg";

import noBunny1 from "../../../assets/images/yesno/no-bunny/hesitating-bunny.jpeg";
import noBunny2 from "../../../assets/images/yesno/no-bunny/no-motion-bunny.jpeg";

import { getRandomItem } from "../../../utils/random";

const YES_BUNNIES = [bunny1, bunny2, bunny3];
const NO_BUNNIES = [noBunny1, noBunny2];

export function useRandomBunny(isYes: boolean) {
  const randomBunnyImage = useMemo(() => {
    const images = isYes ? YES_BUNNIES : NO_BUNNIES;
    return getRandomItem(images);
  }, [isYes]);

  return randomBunnyImage;
}
