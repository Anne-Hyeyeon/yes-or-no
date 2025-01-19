import multiChoiceBunny from "../../../assets/images/multi-choice/multi-choice-bunny.jpeg";
import { MULTI_CHOICE_STEPS } from "../constants";
import { useMultiChoiceQuestionForm } from "../hooks/useMultiChoiceQuestionForm";

type QuestionFormProps = {
  onSubmit: (choices: string[]) => void;
};

export default function QuestionForm({ onSubmit }: QuestionFormProps) {
  const { inputs, handleInputChange, addInput, removeInput, getValidInputs } =
    useMultiChoiceQuestionForm();

  const handleSubmit = () => {
    const validInputs = getValidInputs();
    if (validInputs.length > 0) onSubmit(validInputs);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">여러 선택지</h2>
        <div className="text-gray-600 space-y-2">
          {MULTI_CHOICE_STEPS.map((step, index) => (
            <p key={index}>
              <span className="font-medium">{index + 1}. </span>
              {step}
            </p>
          ))}
        </div>
      </div>

      <img
        src={multiChoiceBunny}
        alt="Multi Choice Bunny"
        className="w-full h-auto object-contain rounded"
      />

      <div className="space-y-4 mt-4">
        {inputs.map((input, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength={20}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder={`선택지 ${index + 1} (20자 이내)`}
            />
            <button
              onClick={() => removeInput(index)}
              className="text-lg text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        ))}
        {inputs.length < 10 && (
          <button
            onClick={addInput}
            className="py-1 px-3 bg-gray-200 rounded-lg text-sm hover:bg-gray-300"
          >
            추가하기 ({inputs.length}/10)
          </button>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={
          inputs.some((input) => input.trim() === "") || inputs.length === 0
        }
        className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        답변 받기
      </button>
    </div>
  );
}
