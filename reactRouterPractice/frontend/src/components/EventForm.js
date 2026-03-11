import { useEffect, useState } from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    if (event) {
      setEventData(event);
    }
  }, []);

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  const handleOnChange = (e) => {
    console.log(e.target.name);
    const inputName = e.target.name;

    const inputValue = e.target.value;
    setEventData((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          // value={eventData?.title}
          defaultValue={event ? event.title : ""}
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
