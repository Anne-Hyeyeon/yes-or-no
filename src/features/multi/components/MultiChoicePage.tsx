import { useState } from "react";
import QuestionForm from "./QuestionForm";
import AnswerView from "./AnswerView";
import { useFadeIn } from "../../../hooks/useFadein";

export default function MultiChoicePage() {
  const [selectedChoices, setSelectedChoices] = useState<string[] | null>(null);
  const { className: fadeInClassName } = useFadeIn(1000);

  const handleReset = () => {
    setSelectedChoices(null);
  };

  return (
    <div className={`max-w-lg mx-auto p-4 ${fadeInClassName}`}>
      {!selectedChoices ? (
        <QuestionForm
          onSubmit={(choices) => {
            setSelectedChoices(choices);
          }}
        />
      ) : (
        <AnswerView choices={selectedChoices || []} onReset={handleReset} />
      )}
    </div>
  );
}
