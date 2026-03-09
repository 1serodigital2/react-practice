import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";

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

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      if (
        eventData.title === "" ||
        eventData.date === "" ||
        eventData.description === "" ||
        eventData.image === ""
      ) {
        throw new Error("Please fill up all the required fields");
      }

      const response = await fetch("http://localhost:8080/events", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      console.log("submitting event", response);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const resData = response.json();
      return resData;
    } catch (error) {
      console.error("handleFormSubmission", error);
    }
  };

  return (
    <Form
      method="post"
      // onSubmit={handleFormSubmission}
      className={classes.form}
    >
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          value={eventData?.title}
          onChange={handleOnChange}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          value={eventData?.image}
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
          value={eventData?.date}
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
          value={eventData?.description}
          onChange={handleOnChange}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
