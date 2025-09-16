import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [eneteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleEmailChange(event) {
    // setEnteredEmail(event.target.value);
    setEnteredValues((prevValue) => ({
      ...prevValue,
      email: event.target.value,
    }));
  }
  function handlePasswordChange(event) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      password: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    console.log("entered email", eneteredValues.email);
    console.log("password", eneteredValues.password);
    // console.log("entered email", enteredEmail);
    // console.log("entered password", enteredPassword);
  }

  // function clearForm(){
  //   handleSubmit
  // }

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
            onChange={handleEmailChange}
            value={eneteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
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
