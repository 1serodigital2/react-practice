import { useSelector } from "react-redux";

import { Fragment } from "react/jsx-runtime";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfie from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfie />}
      <Counter />
    </Fragment>
  );
}

export default App;
