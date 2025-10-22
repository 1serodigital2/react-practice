import { useState } from "react";
import Input from "./Input";

import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const {
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    value: emailValue,
    hasError: emailHasError,
    resetInput: resetEmailInput,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    value: passwordValue,
    hasError: passwordHasError,
    resetInput: resetPasswordInput,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  const [formOk, setFormOk] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      setFormOk(false);
    } else {
      setFormOk(true);
    }
  }

  function clearForm() {
    resetEmailInput();
    resetPasswordInput();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Input
            inputLabel="Email"
            inputType="email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            inputValue={emailValue}
            error={
              emailHasError && emailValue.length > 10 && "Invalid email address"
            }
          />
        </div>

        <div className="control no-margin">
          <Input
            inputLabel="Password"
            inputType="password"
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            inputValue={passwordValue}
            error={
              passwordHasError &&
              passwordValue.length > 3 &&
              "Password must be at least 6 characters long"
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button
          className="button button-flat"
          type="button"
          onClick={clearForm}
        >
          Reset
        </button>
        <button className="button">Login</button>
      </p>
      {formOk == false && (
        <div className="control-error">
          <p>Please fix invalid input</p>
        </div>
      )}
    </form>
  );
}
