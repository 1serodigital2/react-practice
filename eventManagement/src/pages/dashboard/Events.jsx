import { useContext } from "react";
import { EventsContext } from "../../store/events-context";
import useFetch from "../../hooks/useFetch";

const EventList = () => {
  const { events, handleDelete } = useContext(EventsContext);
  console.log("event context", events);
  const { deleteEvent } = useFetch();

  const handleDeleteEvent = (eventId) => {
    if (confirm("Are you sure you want to delete this event") === true) {
      console.log("delete event id: ", eventId);
      console.log("delete event: ", events);

      handleDelete(eventId);
      deleteEvent(eventId);
    }
  };

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
                <td>{key + 1}</td>
                <td>{item.title}</td>
                <th>{item.date}</th>
                <th>{item.location}</th>
                <td>
                  <button>Edit</button>
                  <button
                    onClick={() =>
                      handleDeleteEvent(item?.firebaseKey || item?.id)
                    }
                  >
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
