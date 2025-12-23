import { useSelector } from "react-redux";

import { Fragment } from "react/jsx-runtime";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
