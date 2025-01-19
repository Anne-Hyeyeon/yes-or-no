import { useState } from "react";

export function useMultiChoiceQuestionForm(initialInputs = ["", ""]) {
  const [inputs, setInputs] = useState(initialInputs);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(0, 50); // 50자 제한
    setInputs(newInputs);
  };

  const addInput = () => {
    if (inputs.length < 10) {
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
    handleInputChange,
    addInput,
    removeInput,
    getValidInputs,
  };
}
