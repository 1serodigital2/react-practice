import { useDispatch } from "react-redux";
import { useState } from "react";
import { addEventsFirebasae, getEventsFirebase } from "../store/event-actions";

import Input from "../components/Input";

const NewEventPage = () => {
  const [errors, setErrors] = useState([]);
  const [eventDetail, setEventDetail] = useState({
    name: "",
    date: "",
    location: "",
  });

  const dispatch = useDispatch();

  const handleFormSubmission = async (event) => {
    try {
      event.preventDefault();
      console.log("event", event.target.name.value);

      let errors = [];

      if (eventDetail.name.trim().length <= 4) {
        errors.push("enter valid name");
      }

      if (errors.length > 0) {
        setErrors(errors);
        return;
      }
      await dispatch(addEventsFirebasae(eventDetail));
      dispatch(getEventsFirebase());
      setEventDetail({
        name: "",
        date: "",
        location: "",
      });
      setErrors([]);
    } catch (error) {
      console.error("fatal error", error);
    }
  };

  const handleFormData = (event) => {
    console.log("handleFormReset", event);

    const { name, value } = event.target;

    setEventDetail((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h1>New Event</h1>
      <form onSubmit={handleFormSubmission}>
        <Input
          label="Name"
          type="text"
          value={eventDetail?.name}
          handleChange={handleFormData}
        />
        <Input
          label="Date"
          type="date"
          value={eventDetail?.date}
          handleChange={handleFormData}
        />
        <Input
          label="Location"
          type="text"
          value={eventDetail?.location}
          handleChange={handleFormData}
        />
        <button>Submit</button>
      </form>
      {errors && <p>{errors}</p>}
    </>
  );
};

export default NewEventPage;
