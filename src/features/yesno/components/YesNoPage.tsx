import { useState } from "react";
import QuestionForm from "./QuestionForm";
import AnswerView from "./AnswerView";
import { useFadeIn } from "../../../hooks/useFadein";

export default function YesNoPage() {
  const [question, setQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const { className: fadeInClassName } = useFadeIn(1000);

  const handleReset = () => {
    setQuestion("");
    setShowAnswer(false);
  };

  return (
    <div className={fadeInClassName}>
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
