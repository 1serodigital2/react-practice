const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const storeSubscriber = () => {
  const latestState = store.getState();
  console.log("latestState", latestState);
};

store.subscribe(storeSubscriber);
store.dispatch({ type: "increment" });
