import { createContext, useReducer } from "react";

export const EventsContext = createContext({
  events: [],
  setEvents: () => {},
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

    case "SET_EVENTS_LIST":
      console.log("SET_EVENTS_LIST", action.payload);

      return {
        events: action.payload,
      };
  }
};

const EventsContextProvider = ({ children }) => {
  const [eventsState, eventsDispatch] = useReducer(eventsReducer, initialState);

  const handleAddEvent = (eventDetail) => {
    console.log("handleAddEvent events list", eventDetail);
    eventsDispatch({
      type: "CREATE_NEW_EVENT",
      payload: {
        id: eventDetail.id,
        title: eventDetail.title,
        date: eventDetail.date,
        location: eventDetail.location,
      },
    });
  };

  const handeSetEvents = (eventsList) => {
    // console.log("handeSetEvents events list", eventsList);

    let eventsData = [];
    if (eventsList != "") {
      console.log("events found");

      for (const key in eventsList) {
        eventsData.push({
          eventId: eventsList[key].id,
          title: eventsList[key].title,
          date: eventsList[key].date,
          location: eventsList[key].location,
        });
      }
    } else {
      console.log("no events found");
    }

    console.log("Events data after conversion__", eventsData);
    eventsDispatch({
      type: "SET_EVENTS_LIST",
      payload: eventsData,
    });
  };

  const eventCtxt = {
    events: eventsState.events,
    addEvent: handleAddEvent,
    setEvents: handeSetEvents,
  };

  return (
    <EventsContext.Provider value={eventCtxt}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
