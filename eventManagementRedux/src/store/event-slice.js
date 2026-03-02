import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventChanged: false,
  processing: false,
  shouldFetch: true,
  events: [],
};

const eventSlice = createSlice({
  name: "eventSlice",
  initialState: initialState,
  reducers: {
    addEvents(state, action) {
      console.log("state", state);
      console.log("action", action);

      state.eventChanged = true;
      state.events.push(action.payload);

      console.log("events after push", state.events);
    },

    toggleEventChange(state, action) {
      state.eventChanged = action.payload;
      console.log("toggleEventChange", state.eventChanged);
    },
    toggleShouldFetch(state, action) {
      state.shouldFetch = action.payload;
    },

    setEvents(state, action) {
      state.events = action.payload;
    },

    deleteEvent(state, action) {
      state.events = state.events.filter(
        (event) => event.eventId != action.payload,
      );
    },
  },
});

export default eventSlice;
