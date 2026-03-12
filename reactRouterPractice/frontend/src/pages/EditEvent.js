import EventForm from "../components/EventForm";
import { useParams, useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const params = useParams();
  const event = useRouteLoaderData("event-detail").event;
  console.log("events", event);

  return (
    <>
      <h1>EditEventPage ({params.eventSlug})</h1>
      <EventForm method="patch" event={event} />
    </>
  );
};
export default EditEventPage;
