import { useContext, useActionState } from "react";
import { useParams } from "react-router-dom";
import { EventsContext } from "../../store/events-context";

import Input from "../../components/dashboard/Input";

const EditEventPage = () => {
  const params = useParams();
  const { events, updateEvent } = useContext(EventsContext);

  const editableEvent = events.find(
    (event) => event.firebaseKey === params.eventKey,
  );
  console.log("params", params);
  console.log("editableEvent", editableEvent);

  const updateEventAction = (prevState, formData) => {
    const title = formData.get("name");
    const date = formData.get("date");
    const location = formData.get("location");

    let errors = [];
    const enteredValue = {
      firebaseKey: params.eventKey,
      title,
      date,
      location,
    };

    const formEnteredData = {
      errors,
      enteredValue,
    };

    if (errors.length > 0) {
      console.log("error while updatign event");

      return formEnteredData;
    }

    updateEvent(enteredValue);
    return formEnteredData;
  };

  const [formState, formAction] = useActionState(updateEventAction, {
    errors: null,
  });

  const eventTitle = formState?.enteredValue?.title || editableEvent?.title;
  const eventDate = formState?.enteredValue?.date || editableEvent?.date;
  const eventLocation =
    formState?.enteredValue?.location || editableEvent?.location;

  return (
    <>
      <h1>Edit event page</h1>
      <p>Firebase key: {params.eventKey}</p>

      <form action="">
        <Input type="text" label="Name" value={eventTitle} />
        <Input type="date" label="date" value={eventDate} />
        <Input type="text" label="Location" value={eventLocation} />
        <button formAction={formAction}>Update</button>
      </form>

      {formState.null && <p>Error while updating event</p>}
    </>
  );
};

export default EditEventPage;
