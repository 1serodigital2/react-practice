import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventsFirebase, deleteEventFirebase } from "../store/event-actions";
import { eventAction } from "../store";

const EventsPage = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.events);
  const eventChanged = useSelector((state) => state.events.eventChanged);
  const notification = useSelector((state) => state.ui.notification);
  const shouldFetch = useSelector((state) => state.events.shouldFetch);

  useEffect(() => {
    console.log("rendered");
    if (shouldFetch) {
      dispatch(getEventsFirebase());
      dispatch(eventAction.toggleEventChange(false));
      dispatch(eventAction.toggleShouldFetch(false));
    }
  }, []);

  console.log("notification", notification);
  console.log("eventsList length", eventsList.length);
  console.log("shouldFetch", shouldFetch);
  // console.log("notification title", notification.title);

  const handleDeleteEvent = (eventId) => {
    console.log("deleting event", eventId);

    if (confirm("Are you sure to delete this event") === true) {
      dispatch(deleteEventFirebase(eventId));
      dispatch(eventAction.deleteEvent(eventId));
    }
  };

  return (
    <>
      <h1>Events page</h1>

      {notification && (
        <div>
          <h5>{notification?.title}</h5>
          <p>{notification?.message}</p>
        </div>
      )}

      {eventsList.length <= 0 && notification?.status != "pending" <= 0 && (
        <p>Events not found</p>
      )}

      {eventsList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>location</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {eventsList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDeleteEvent(item.eventId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default EventsPage;
