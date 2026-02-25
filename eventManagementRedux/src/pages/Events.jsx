import { useSelector } from "react-redux";
const EventsPage = () => {
  const eventsList = useSelector((state) => state.events);
  console.log("from events list page", eventsList);

  return <h1>Events page</h1>;
};

export default EventsPage;
