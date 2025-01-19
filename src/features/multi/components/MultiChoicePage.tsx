import { useState } from "react";
import QuestionForm from "./QuestionForm";
import AnswerView from "./AnswerView";
import { useFadeIn } from "../../../hooks/useFadein";

type SubmittedData = {
  choices: string[];
  question: string;
} | null;

export default function MultiChoicePage() {
  const [submittedData, setSubmittedData] = useState<SubmittedData>(null);
  const { className: fadeInClassName } = useFadeIn(1000);

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className={fadeInClassName}>
      {!submittedData ? (
        <QuestionForm
          onSubmit={(data) => {
            setSubmittedData(data);
          }}
        />
      ) : (
        <AnswerView
          choices={submittedData.choices}
          question={submittedData.question}
          onReset={handleReset}
        />
      )}
    </div>
  );
}
