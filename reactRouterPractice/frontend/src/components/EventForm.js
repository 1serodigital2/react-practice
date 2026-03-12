// import { useEffect, useState } from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  // const [eventData, setEventData] = useState({
  //   title: "",
  //   date: "",
  //   description: "",
  //   image: "",
  // });
  // useEffect(() => {
  //   if (event) {
  //     setEventData(event);
  //   }
  // }, []);

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  // const handleOnChange = (e) => {
  //   console.log(e.target.name);
  //   const inputName = e.target.name;

  //   const inputValue = e.target.value;
  //   setEventData((prevState) => {
  //     return { ...prevState, [inputName]: inputValue };
  //   });
  // };

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          // value={eventData?.title}
          defaultValue={event ? event.title : ""}
          // onChange={handleOnChange}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // value={eventData?.image}
          defaultValue={event ? event.image : ""}
          required
          // onChange={handleOnChange}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          // value={eventData?.date}
          defaultValue={event ? event.date : ""}
          // onChange={handleOnChange}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          // value={eventData?.description}
          defaultValue={event ? event.description : ""}
          // onChange={handleOnChange}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventSlug;
    url = "http://localhost:8080/events" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // console.log("send event action response___", response);
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Error("Unable to send event data");
  }
  return redirect("/events");
};
