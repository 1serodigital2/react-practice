import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import ErrorBlock from "../UI/ErrorBlock";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../utils/http.js";

import { useMutation } from "@tanstack/react-query";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
  });

  function handleSubmit(formData) {
    console.log("handleSubmit", formData);

    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && <p>Submitting...</p>}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to submit"
          message={
            error?.info?.message ||
            "Failed to submitting event. Please try again later"
          }
        />
      )}
    </Modal>
  );
}
