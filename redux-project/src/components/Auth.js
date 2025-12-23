import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authAction } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();
  const loginAction = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      dispatch(authAction.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginAction}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
