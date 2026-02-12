import { useActionState, useContext } from "react";
import { EventsContext } from "../../store/events-context";

import Input from "../../components/dashboard/Input";

const NewEventPage = () => {
  const { addEvent, events } = useContext(EventsContext);
  console.log("updated events", events);

  const handleFormSubmit = (prevState, formData) => {
    const title = formData.get("name");
    const date = formData.get("event_date");
    const location = formData.get("location");

    let errors = [];

    if (title == "" || title.length < 4) {
      errors.push("Title is required");
    }

    console.log("errors", errors);
    const enteredValues = {
      title,
      date,
      location,
    };
    if (errors.length > 0) {
      const data = {
        errors,
        enteredValues,
      };

      return data;
    }

    console.log("handleFormSubmit data", enteredValues);
    addEvent(enteredValues);
  };

  const [formState, formAction] = useActionState(handleFormSubmit, {
    error: null,
  });
  console.log("form state", formState);

  return (
    <>
      <h1>Create New Event</h1>
      <form action="">
        <Input
          type="text"
          label="Name"
          value={formState?.enteredValue?.title}
        />
        <Input type="date" label="Event date" />
        <Input type="text" label="Location" />
        <button formAction={formAction}>Submit</button>
      </form>
    </>
  );
};

export default NewEventPage;
