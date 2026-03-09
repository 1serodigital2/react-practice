import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventSlug}`,
  );
  if (!response.ok) {
    throw new Response("Unable to get event", { status: response.status });
  } else {
    return response;
  }
};
