import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <h1>New Event Page</h1>
      <EventForm method="post" />
    </>
  );
};
export default NewEventPage;
