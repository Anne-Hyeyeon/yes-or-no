import closingBalloon from "../../../assets/images/closing-speeach-balloon.jpeg";
import { useAnswer } from "../hooks/useAnswer";
import Loading from "../../../components/loading/Loading";
import { useHtmlToImage } from "../../../hooks/useHtmlToImage";
import { useFadeIn } from "../../../hooks/useFadein";
import { useLoading } from "../../../hooks/\buseLoading";

type AnswerViewProps = {
  question: string;
  onReset: () => void;
};
export default function AnswerView({ question, onReset }: AnswerViewProps) {
  const { isYes, answer, isValid, randomBunnyImage } = useAnswer(question);
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
          <h2 className="text-xl font-semibold">너의 질문</h2>
          <div className="bg-gray-50 p-4 rounded max-h-32 overflow-auto">
            <p className="text-gray-600 break-words">{question}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">결정토끼의 대답</h2>
          <div className="bg-gray-100 p-4 rounded max-h-32 overflow-auto">
            <p className="text-gray-600 break-words">
              {!isValid ? (
                <span className="text-xl font-bold">
                  답변할 수 없는 질문이야.
                </span>
              ) : (
                <>
                  <span className="text-2xl font-bold">
                    {isYes ? "YES!" : "NO!"}
                  </span>
                  {isYes ? " 바로 진행해!" : "... 다시 생각해보는 게 좋겠어."}
                </>
              )}
            </p>
          </div>
        </div>
        <img
          src={closingBalloon}
          alt="answer bunny"
          className="w-full h-auto object-contain"
        />
        <div className="whitespace-pre-wrap text-xl font-medium leading-relaxed text-gray-800 break-words">
          {answer}
        </div>
        <img
          src={randomBunnyImage}
          alt={isYes ? "yes bunny" : "no bunny"}
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
          다시 질문하기
        </button>
      </div>
    </div>
  );
}
