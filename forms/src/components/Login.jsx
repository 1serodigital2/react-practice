import { useState } from "react";

export default function Login() {
  const [eneteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("entered email", eneteredValues.email);
    console.log("password", eneteredValues.password);
  }

  function clearForm() {
    setEnteredValues({ email: "", password: "" });
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
            value={eneteredValues.email}
          />
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
            value={eneteredValues.password}
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
