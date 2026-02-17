import { createContext, useReducer, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const EventsContext = createContext({
  events: [],
  loading: false,
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
      console.log("SET_EVENTS_LIST eventsReducer", action.payload);

      return {
        events: action.payload,
      };

    case "DELETE_EVENT": {
      const latestEvents = state.events.filter(
        (event) => event.firebaseKey !== action.payload,
      );

      console.log("latestEvents", latestEvents);

      return {
        ...state,
        events: latestEvents,
      };
    }
  }
};

const EventsContextProvider = ({ children }) => {
  const [eventsState, eventsDispatch] = useReducer(eventsReducer, initialState);
  const { getEventList } = useFetch();

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
    eventsDispatch({
      type: "SET_EVENTS_LIST",
      payload: eventsList,
    });
  };

  const handleDelete = (eventId) => {
    console.log("eventstate", eventsState);

    eventsDispatch({
      type: "DELETE_EVENT",
      payload: eventId,
    });
  };

  useEffect(() => {
    const getEvents = async () => {
      const events = await getEventList();
      handeSetEvents(events);
    };
    getEvents();
  }, []);

  console.log("events fetched: ", eventsState);
  const eventCtxt = {
    events: eventsState.events,
    addEvent: handleAddEvent,
    setEvents: handeSetEvents,
    handleDelete,
  };

  return (
    <EventsContext.Provider value={eventCtxt}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
