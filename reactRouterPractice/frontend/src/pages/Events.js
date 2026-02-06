import { Link } from "react-router-dom";

const EVENTS = [
  { eventId: "ev1", title: "This is dummy event one", slug: "event-one" },
  { eventId: "ev2", title: "This is dummy event two", slug: "event-two" },
  { eventId: "ev3", title: "This is dummy event three", slug: "event-three" },
  { eventId: "ev4", title: "This is dummy event four", slug: "event-four" },
  { eventId: "ev5", title: "This is dummy event five", slug: "event-five" },
];

const EventsPage = () => {
  return (
    <>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.eventId}>
            <Link to={`/events/${event.slug}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
