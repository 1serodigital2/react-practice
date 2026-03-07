import EventForm from "../components/EventForm";
import { useParams, useLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const params = useParams();
  const event = useLoaderData().event;
  console.log("events", event);

  return (
    <>
      <h1>EditEventPage ({params.eventSlug})</h1>
      <EventForm method="PATCH" event={event} />
    </>
  );
};
export default EditEventPage;
