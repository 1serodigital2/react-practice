import { useContext, useEffect } from "react";
import { EventsContext } from "../../store/events-context";
import useFetch from "../../hooks/useFetch";

const EventList = () => {
  const { events, setEvents } = useContext(EventsContext);
  const { getEventList, deleteEvent } = useFetch();

  const handleDeleteEvent = (eventId) => {
    if (confirm("Are you sure you want to delete this event") === true) {
      deleteEvent(eventId);
      // getEventList();
    }
  };
  // useEffect(() => {
  //   handleDeleteEvent();
  // }, [handleDeleteEvent]);

  useEffect(() => {
    const getEvents = async () => {
      const eventsList = await getEventList();
      console.log("getEvents", eventsList);

      setEvents(eventsList);
    };
    getEvents();
  }, []);

  console.log("event context", events);
  return (
    <>
      <h1>Event list</h1>

      {events == "" && <p>No events uploaded yet</p>}

      {events != "" && (
        <table className="table">
          <thead>
            <tr>
              <th>SL no</th>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item, key) => (
              <tr key={key}>
                <td>{item.slNo}</td>
                <td>{item.title}</td>
                <th>{item.date}</th>
                <th>{item.location}</th>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDeleteEvent(item.id)}>
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

export default EventList;
