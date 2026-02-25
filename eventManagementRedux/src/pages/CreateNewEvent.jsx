import { useDispatch } from "react-redux";
import { useActionState } from "react";
import { eventAction } from "../store";

import Input from "../components/Input";

const NewEventPage = () => {
  const dispatch = useDispatch();
  const handleFormAction = (prevState, formData) => {
    const name = formData.get("name");
    const date = formData.get("date");
    const location = formData.get("location");

    let errors = [];

    const enteredValues = {
      name,
      date,
      location,
    };

    if (enteredValues.name.length <= 4) {
      errors.push("enter valid name");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues,
      };
    }

    console.log("enteredValues", enteredValues);
    dispatch(eventAction.addEvents({ ...enteredValues }));
    return {
      errors,
      enteredValues,
    };
  };
  const [formState, formAction] = useActionState(handleFormAction, {
    errors: null,
  });

  console.log("form state", formState.enteredValues?.name);

  return (
    <>
      <h1>New Event</h1>
      <form>
        <Input
          label="Name"
          type="text"
          defaultValue={formState.enteredValues?.name}
        />
        <Input
          label="Date"
          type="date"
          defaultValue={formState.enteredValues?.date}
        />
        <Input
          label="Location"
          type="text"
          defaultValue={formState.enteredValues?.location}
        />
        <button formAction={formAction}>Submit</button>
      </form>
    </>
  );
};

export default NewEventPage;
