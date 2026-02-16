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
    let eventsData = [];
    console.log("events found");
    let slNo = 0;

    for (const key in eventsList) {
      slNo += 1;
      eventsData.push({
        slNo: slNo,
        eventId: eventsList[key].id,
        title: eventsList[key].title,
        date: eventsList[key].date,
        location: eventsList[key].location,
      });
    }

    console.log("Events data after conversion__", eventsData);
    eventsDispatch({
      type: "SET_EVENTS_LIST",
      payload: eventsData,
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
  };

  return (
    <EventsContext.Provider value={eventCtxt}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
