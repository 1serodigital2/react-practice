import { useState } from "react";

export default function Login() {
  const [eneteredValues, setEnteredValues] = useState({
    email: {
      value: "",
      valid: "",
    },
    password: {
      value: "",
      valid: "",
    },
  });

  function emailValidation(email) {
    const validateEmail = email != "" && !email.includes("@");
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: {
        value: value,
      },
    }));
    console.log(eneteredValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(eneteredValues);
  }

  function clearForm() {
    setEnteredValues({
      email: { value: "", valid: "" },
      password: { value: "", valid: "" },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={() => emailValidation(eneteredValues.email)}
            value={eneteredValues.email.value}
          />
          {/* <div className="control-error">
            {validateEmail && <p>Please enter valid email address</p>}
          </div> */}
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
            value={eneteredValues.password.value}
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
    </form>
  );
}
