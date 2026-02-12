import { useContext } from "react";
import { EventsContext } from "../../store/events-context";

const EventsPage = () => {
  const eventCtxt = useContext(EventsContext);

  console.log("event context", eventCtxt);

  return <h1>Events page</h1>;
};

export default EventsPage;
