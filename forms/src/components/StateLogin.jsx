import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState({
    email: "",
    password: "",
  });

  const [formOk, setFormOk] = useState(null);

  function handleInputChange(identifier, value) {
    const validInput = validateInput(identifier, value);

    console.log("validate input", validInput);

    let error;

    if (!validInput) {
      error =
        identifier === "email" && value.length > 4
          ? "Invalid email"
          : identifier === "password" && value.length > 4
          ? "Length must be greater than 6"
          : "";
      setErrorText((prevValue) => ({
        ...prevValue,
        [identifier]: error,
      }));
    } else {
      setErrorText((prevValue) => ({
        ...prevValue,
        [identifier]: "",
      }));
    }

    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));

    console.log("error text", errorText);
  }

  function validateInput(identifier, inputValue) {
    if (inputValue == "") return false;

    if (identifier === "email" && inputValue.includes("@")) return true;
    if (identifier === "password" && inputValue.length > 6) return true;

    return false;
  }

  function handleInputBlur(identifier, inputValue) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: inputValue,
    }));

    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: inputValue,
    }));

    console.log(" handleINputBlur", enteredValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (errorText.email == "" && errorText.password == "") {
      setFormOk(true);
    } else {
      setFormOk(false);
    }
    console.log("FOrm", formOk);
  }

  function clearForm() {
    setEnteredValues({ email: "", password: "" });
    console.log("clear form", enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Input
            inputLabel="Email"
            inputType="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={(event) => handleInputBlur("email", event.target.value)}
            inputValue={enteredValues.email}
            error={errorText.email}
          />
        </div>

        <div className="control no-margin">
          <Input
            inputLabel="Password"
            inputType="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={(event) => handleInputBlur("password", event.target.value)}
            inputValue={enteredValues.password}
            error={errorText.password}
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
