import { useState } from "react";
import { validateEmail, validatePassword } from "../util/validation";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [errorText, setErrorText] = useState("");

  const isValidInput = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    console.log("error text", errorText);
    console.log("enteredValue ", enteredValue);
  }

  function handleInputBlur(inputValue) {
    setEnteredValue(inputValue);
    console.log(" handleInputBlur", enteredValue);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    errorText,
    hasError: !isValidInput,
  };
}
