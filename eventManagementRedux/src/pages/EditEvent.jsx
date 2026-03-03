import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { eventAction } from "../store";
import { getEventsFirebase, updateEventFirebase } from "../store/event-actions";

const EditEventPage = () => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    location: "",
  });
  const dispatch = useDispatch();
  const params = useParams();
  const events = useSelector((state) => state?.events?.events);
  const shouldFetch = useSelector((state) => state.events.shouldFetch);
  const currentEvent = events.find((event) => event.eventId === params.eventId);

  useEffect(() => {
    if (!currentEvent && shouldFetch) {
      dispatch(getEventsFirebase());
    }
  }, [currentEvent, dispatch, shouldFetch]);
  console.log("current event", currentEvent);
  console.log("params", params);
  console.log("events", events);

  useEffect(() => {
    if (currentEvent) {
      setEvent(currentEvent);
    }
  }, [currentEvent]);

  console.log("current event", currentEvent);
  console.log("state event", event);

  const handleInputChange = (value, fieldName) => {
    setEvent((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    try {
      let errors = [];

      if (event.name?.length < 4) {
        errors.push("Invalid name, Please enter valid name");
      }

      if (errors.length > 0) {
        return errors;
      }

      await dispatch(updateEventFirebase(event));
      dispatch(eventAction.toggleShouldFetch(true))
    } catch (error) {
      console.error("Error on handleFormSubmission", error);
    }
  };

  return (
    <>
      <h1>Edit event page</h1>
      <form onSubmit={handleFormSubmission}>
        <Input
          label="Name"
          type="text"
          value={event?.name}
          handleChange={(e) => handleInputChange(e.target.value, "name")}
        />
        <Input
          label="Date"
          type="date"
          value={event?.date}
          handleChange={(e) => handleInputChange(e.target.value, "date")}
        />
        <Input
          label="Location"
          type="text"
          value={event?.location}
          handleChange={(e) => handleInputChange(e.target.value, "location")}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default EditEventPage;
