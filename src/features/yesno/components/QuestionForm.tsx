import { useState } from "react";
import yesOrNobunny from "../../../assets/images/yesno/yes-or-no-bunny.jpeg";
import { YESNO_STEPS } from "../constants";

type QuestionFormProps = {
  onSubmit: (question: string) => void;
};

export default function QuestionForm({ onSubmit }: QuestionFormProps) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;
    onSubmit(question.trim());
  };

  return (
    <div className="space-y-4">
      <div className="text-center space-y-5">
        <h2 className="text-xl font-semibold">Yes or No</h2>
        <div className="text-gray-600 space-y-2">
          {YESNO_STEPS.map((step, index) => (
            <p key={index}>
              <span className="font-medium">{index + 1}. </span>
              {step}
            </p>
          ))}
        </div>
      </div>

      <img
        src={yesOrNobunny}
        alt="yes-or-no Bunny"
        className="w-full h-auto object-contain"
      />

      <div className="mt-8">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={100} // 최대 100자 제한
          className="w-full p-4 border rounded-lg h-32 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="100자 이내로 Yes or No가 고민되는 상황을 적어 주세요. ex) 소개팅남이랑 한 번만 더 만나볼까?"
        />
        <div className="text-right text-sm text-gray-500">
          {question.length}/100
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!question.trim()}
        className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        답변 받기
      </button>
    </div>
  );
}
