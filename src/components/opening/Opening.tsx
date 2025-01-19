import { useState } from "react";
import { OPENING_TEXT } from "./constants";
import openingBunny from "../../assets/images/opening/opening-bunny.jpeg";
import { getRandomItem } from "../../utils/random";
import { useFadeIn } from "../../hooks/useFadein";

type OpeningProps = {
  onEnter: () => void;
};

export default function Opening({ onEnter }: OpeningProps) {
  const [text] = useState(getRandomItem(OPENING_TEXT));
  const { className: fadeClassName } = useFadeIn();

  return (
    <div
      className={`fixed inset-0 bg-white flex flex-col items-center justify-center ${fadeClassName}`}
    >
      <div className="max-w-sm text-center px-4">
        <p className="mb-4 text-xl">{text}</p>
        <img
          src={openingBunny}
          alt="Welcome Bunny"
          className="w-full h-auto object-contain"
        />
      </div>
      <button
        onClick={onEnter}
        className="mt-8 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        들어가기
      </button>
    </div>
  );
}
