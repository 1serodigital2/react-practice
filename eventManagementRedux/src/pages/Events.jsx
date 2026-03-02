import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventsFirebase } from "../store/event-actions";

const EventsPage = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.events);
  const notification = useSelector((state) => state.ui);
  useEffect(() => {
    console.log("rendered");

    dispatch(getEventsFirebase());
  }, [dispatch]);

  console.log("notification", notification);
  

  return (
    <>
      <h1>Events page</h1>

        <div>
          <h5>{notification.title}</h5>
          <p>{notification.message}</p>
        </div>
      {/* {notification && (
      )} */}

      {!eventsList && <p>Events not found</p>}
      
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
