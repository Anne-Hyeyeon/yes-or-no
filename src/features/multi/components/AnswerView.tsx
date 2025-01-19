import closingBalloon from "../../../assets/images/closing-speeach-balloon.jpeg";
import Loading from "../../../components/loading/Loading";
import { useHtmlToImage } from "../../../hooks/useHtmlToImage";
import { useFadeIn } from "../../../hooks/useFadein";
import { useLoading } from "../../../hooks/useLoading";
import { useMultiChoiceAnswer } from "../../multi/hooks/useMultiChoiceAnswer";

type AnswerViewProps = {
  choices: string[];
  question: string;
  onReset: () => void;
};

export default function AnswerView({
  choices,
  question,
  onReset,
}: AnswerViewProps) {
  const { choice, randomBunnyImage, answer } = useMultiChoiceAnswer(choices);
  const { ref, generateImage } = useHtmlToImage();
  const { isLoading } = useLoading(4000);
  const { className: fadeInClassName } = useFadeIn(1000);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div
      className={`max-w-md mx-auto bg-white rounded-lg space-y-6 text-center overflow-hidden ${fadeInClassName}`}
    >
      <div ref={ref} className="bg-white space-y-6 p-1">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">고민되는 선택지</h2>
          <div>{question}</div>
          <div className="bg-gray-50 p-4 rounded break-words whitespace-normal">
            {choices.map((choice, index) => (
              <p key={index} className="text-ml text-gray-700">
                {index + 1}. <span className="font-bold">{choice}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">결정토끼의 선택은?</h2>
          <div className="bg-gray-50 p-4 rounded break-words whitespace-normal">
            <p className="text-red-700">
              <span className="font-bold text-3xl">{choice}</span>
            </p>
          </div>
        </div>
        <img
          src={closingBalloon}
          alt="closing bunny"
          className="w-full h-auto object-contain"
        />
        <div className="whitespace-pre-wrap text-ml font-medium leading-relaxed text-gray-800 break-words">
          {answer}
        </div>
        <img
          src={randomBunnyImage}
          alt="random bunny"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex flex-col space-y-6">
        <button
          onClick={generateImage}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          이미지로 저장
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          다시 하기
        </button>
      </div>
    </div>
  );
}
