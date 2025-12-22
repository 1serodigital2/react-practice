import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterAction } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log("state", state);
    return state.counter.counter;
  });
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = (value = 1) => {
    dispatch(counterAction.increment(value)); // {type: SOME_UNIQUE_IDENTIFIER, payload: some_payload}
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className="counter">
        <button onClick={() => incrementHandler()}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
        <button onClick={() => decrementHandler()}>Decrement</button>
      </div>
      <button onClick={() => toggleCounterHandler()}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
