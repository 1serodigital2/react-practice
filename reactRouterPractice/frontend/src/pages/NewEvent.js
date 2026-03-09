import { json } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <h1>New Event Page</h1>
      <EventForm />
    </>
  );
};
export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  console.log("send event action response___", response);

  if (!response.ok) {
    throw new Error("Unable to send event data");
  }

  const resData = await response.json();
  return resData;
};
