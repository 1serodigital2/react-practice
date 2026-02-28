import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventsFirebase } from "../store/event-actions";

const EventsPage = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events);
  useEffect(() => {
    console.log("rendered");

    dispatch(getEventsFirebase());
  }, [dispatch]);

  return (
    <>
      <h1>Events page</h1>
      {eventsList && (
        <ul>
          {eventsList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default EventsPage;
