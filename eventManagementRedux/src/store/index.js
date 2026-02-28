import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./event-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { events: eventSlice.reducer, ui: uiSlice.reducer },
});
export const eventAction = eventSlice.actions;
export default store;
