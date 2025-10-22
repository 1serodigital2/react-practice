import { useState } from "react";
import { validateEmail, validatePassword } from "../util/validation";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const isValidInput = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    console.log("enteredValue ", enteredValue);
  }

  function handleInputBlur(event) {
    setEnteredValue(event.target.value);
    console.log(" handleInputBlur", enteredValue);
  }

  function handleResetInput() {
    setEnteredValue("");
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: !isValidInput && enteredValue.trim() !== "",
    resetInput: handleResetInput,
  };
}
