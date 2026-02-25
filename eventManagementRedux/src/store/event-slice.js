import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "eventSlice",
  initialState: initialState,
  reducers: {
    addEvents(state, action) {
      console.log("state", state);
      console.log("action", action);

      state.events.push(action.payload);

      console.log("events after push", state.events);
    },
  },
});

export default eventSlice;
