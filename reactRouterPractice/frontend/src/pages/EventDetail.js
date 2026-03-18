import { Await, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>Loading event detail...</p>
        }
      >
        <Await resolve={event}>
          {(loadedEventDetail) => <EventItem event={loadedEventDetail} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading all events...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export const loadEvents = async () => {
  const response = await fetch(`http://localhost:8080/events`);

  if (!response.ok) {
    throw new Response("Could not fetch events", { status: response.status });
  } else {
    const resData = await response.json();
    console.log("loadEvents", resData);
    return resData.events;
  }
};

export const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw new Response("Unable to get event", { status: response.status });
  } else {
    const resData = await response.json();

    return resData.event;
  }
};

export const loader = async ({ request, params }) => {
  const eventId = params.eventId;
  return {
    event: await loadEvent(eventId),
    events: loadEvents(),
  };
};

export const deleteEvent = async ({ params, request }) => {
  console.log("params", params);

  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Error("Unable to delete event");
  }
  return redirect("/events");
};
