import { createContext, useReducer } from "react";

export const EventsContext = createContext({
  events: [],
  addEvent: () => {},
  editEvents: () => {},
  deleteEvents: () => {},
});

const initialState = {
  events: [],
};

const eventsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NEW_EVENT":
      console.log("reducer state", state);
      console.log("reducer action", action);

      return {
        events: [action.payload, ...state.events],
      };
  }
};

const EventsContextProvider = ({ children }) => {
  const [eventsState, eventsDispatch] = useReducer(eventsReducer, initialState);

  const handleAddEvent = (eventDetail) => {
    eventsDispatch({
      type: "CREATE_NEW_EVENT",
      payload: {
        eventId: eventDetail.id,
        eventTitle: eventDetail.title,
        eventDate: eventDetail.date,
        eventLocation: eventDetail.location,
      },
    });
  };

  const eventCtxt = {
    events: eventsState.events,
    addEvent: handleAddEvent,
  };

  return (
    <EventsContext.Provider value={eventCtxt}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
