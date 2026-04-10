import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

import { fetchEvent, updateEvent, queryClient } from "../../utils/http.js";

import { useQuery } from "@tanstack/react-query";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { data, isError, error } = useQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  function handleClose() {
    navigate("../");
  }

  const {
    mutate,
    isPending: updateIsPending,
    isError: updateIsError,
    error: updateError,
  } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;

      await queryClient.cancelQueries({ queryKey: ["event", id] });
      const previousEvent = queryClient.getQueriesData(["event", id]);
      queryClient.setQueriesData(["event", id], newEvent);
      return { previousEvent };
    },
    onError: (data, error, context) => {
      queryClient.setQueriesData(
        ["event", id],
        data,
        error,
        context.previousEvent,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(["event", id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="OOPS!!!"
          message={error?.info?.message || "Unable to fetch event detail"}
        />
        <div className="form-actions">
          <Link to="../">Ok</Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {updateIsPending && <p>Event is updating...</p>}
        {!updateIsPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
        {updateIsError && (
          <ErrorBlock
            title="Udate Failed"
            message={updateError?.info?.message || "Unable to update event"}
          />
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export const loader = ({ params }) => {
  console.log("loader triggered", params);

  const id = params.id;
  return queryClient.fetchQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
};
