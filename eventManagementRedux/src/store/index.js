import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./event-slice";

const store = configureStore({
  reducer: { events: eventSlice.reducer },
});
export const eventAction = eventSlice.actions;
export default store;
