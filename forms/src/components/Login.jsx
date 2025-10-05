import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [errorText, setErrorText] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsInvalid =
      !enteredEmail || !enteredEmail.includes("@") ? true : false;
    const passwordIsInvalid =
      !enteredPassword || enteredPassword.length < 6 ? true : false;

    if (emailIsInvalid) {
      setErrorText((prevValue) => ({
        ...prevValue,
        email: "Invalid email",
      }));
    } else {
      setErrorText((prevValue) => ({
        ...prevValue,
        email: "",
      }));
    }
    if (passwordIsInvalid) {
      setErrorText((prevValue) => ({
        ...prevValue,
        password: "Invalid password",
      }));
    } else {
      setErrorText((prevValue) => ({
        ...prevValue,
        password: "",
      }));
    }
  }

  function clearForm() {
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={email} />
          {errorText.email && (
            <div className="control-error">
              <p>{errorText.email}</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          {errorText.password && (
            <div className="control-error">
              <p>{errorText.password}</p>
            </div>
          )}
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
