import { useState } from "react";

export function useMultiChoiceQuestionForm(initialInputs = ["", ""]) {
  const [inputs, setInputs] = useState(initialInputs);
  const [question, setQuestion] = useState("");

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(0, 50);
    setInputs(newInputs);
  };

  const handleQuestionChange = (value: string) => {
    setQuestion(value.slice(0, 50));
  };

  const addInput = () => {
    if (inputs.length < 20) {
      setInputs([...inputs, ""]);
    }
  };

  const removeInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const getValidInputs = () => inputs.filter((input) => input.trim() !== "");

  return {
    inputs,
    question,
    handleInputChange,
    handleQuestionChange,
    addInput,
    removeInput,
    getValidInputs,
  };
}
