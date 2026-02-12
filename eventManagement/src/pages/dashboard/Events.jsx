import { useContext } from "react";
import { EventsContext } from "../../store/events-context";
import classes from "./Events.module.css";

const EventList = () => {
  const { events } = useContext(EventsContext);

  console.log("event context", events);
  return (
    <>
      <h1>Event list</h1>

      {events.length == 0 && <p>No events uploaded yet</p>}

      {events.length > 0 && (
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
            {events.map((item) => (
              <tr>
                <td>{item.eventTitle}</td>
                <th>{item.eventDate}</th>
                <th>{item.eventLocation}</th>
                <td>
                  <button>Edit</button>
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
