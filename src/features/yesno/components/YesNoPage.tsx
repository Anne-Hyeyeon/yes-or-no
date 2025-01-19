import { useState } from "react";
import QuestionForm from "./QuestionForm";
import AnswerView from "./AnswerView";

export default function YesNoPage() {
  const [question, setQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReset = () => {
    setQuestion("");
    setShowAnswer(false);
  };

  return (
    <div>
      {!showAnswer ? (
        <QuestionForm
          onSubmit={(text) => {
            setQuestion(text);
            setShowAnswer(true);
          }}
        />
      ) : (
        <AnswerView question={question} onReset={handleReset} />
      )}
    </div>
  );
}
