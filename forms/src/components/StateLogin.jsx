import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [invalidInput, setInvalidInput] = useState(false);
  const [errorText, setErrorText] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    const validInput = validateInput(identifier, value);

    console.log("validate input", inputValue);

    let error;

    error = !validInput && identifier === "email" ? "Invalid email" : undefined;
    error =
      !validInput && identifier === "password"
        ? "Length must be greater than 6"
        : undefined;

    if (!validInput) {
      setErrorText((prevValue) => ({
        ...prevValue,
        [identifier]: error,
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

    if (identifier === "email" && !inputValue.includes("@")) return true;
    if (identifier === "password" && inputValue.length < 6) return true;

    return false;
  }

  function handleInputBlur(identifier, inputValue) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: inputValue,
    }));

    // const value = inputValue ?? "";
    // const valueNotEmpty = inputValue != "";
    // const trimmed = value.trim();

    // let errorText = "";

    // if (identifier === "email" && valueNotEmpty) {
    //   if (trimmed === "") {
    //     errorText = "Email is required";
    //   } else if (!trimmed.includes("@")) {
    //     errorText = "Invalid email";
    //   }
    // }

    // if (identifier === "password" && valueNotEmpty) {
    //   if (trimmed === "") {
    //     errorText = "Password is required";
    //   } else if (trimmed.length < 6) {
    //     errorText = "Password must be at least 6 characters";
    //   }
    // }

    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: inputValue,
    }));

    console.log(" handleINputBlur", enteredValues);
  }

  // function emailValidation(email) {
  //   const validateEmail = email != "" && !email.includes("@");
  //   setEnteredValues(() => ({
  //     email: {
  //       valu,
  //     },
  //   }));
  // }

  // function handleInputBlur(identifier) {
  //   const enteredValue = enteredValues[identifier].value !== "";
  //   setEnteredValues((preValue) => ({
  //     ...preValue,
  //     [identifier]: {
  //       value: enteredValues[identifier].value,
  //       didEdit: enteredValue ? true : false,
  //     },
  //   }));
  //   console.log("Entered value", enteredValue);
  // }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValue) => ({
  //     ...prevValue,
  //     [identifier]: {
  //       value: value,
  //     },
  //   }));
  //   console.log(enteredValues);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={(event) => handleInputBlur("email", event.target.value)}
            // value={enteredValues.email.value}
            value={enteredValues.email}
          />
          {/*enteredValues.email.validation.didEdit &&
            enteredValues.email.validation.errorText && (
              <div className="control-error">
                <p>{enteredValues.email.validation.errorText}</p>
              </div>
            ) */}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={(event) => handleInputBlur("password", event.target.value)}
            value={enteredValues.password.value}
          />
          {/*enteredValues.password.validation.didEdit &&
            enteredValues.password.validation.errorText && (
              <div className="control-error">
                <p>{enteredValues.password.validation.errorText}</p>
              </div>
            )*/}
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
    </form>
  );
}
