import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <EventItem />
      <p>{params.eventSlug}</p>
    </>
  );
};

export default EventDetailPage;
