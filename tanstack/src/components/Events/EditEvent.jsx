import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

import { fetchEvent, updateEvent, queryClient } from "../../utils/http.js";

import { useQuery } from "@tanstack/react-query";

export default function EditEvent() {
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  console.log("state", state);

  const { data } = useQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    staleTime: 10000,
  });

  function handleClose() {
    navigate("../");
  }

  // const {
  //   mutate,
  //   isPending: updateIsPending,
  //   isError: updateIsError,
  //   error: updateError,
  // } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ["event", id] });
  //     const previousEvent = queryClient.getQueriesData(["event", id]);
  //     queryClient.setQueriesData(["event", id], newEvent);
  //     return { previousEvent };
  //   },
  //   onError: (data, error, context) => {
  //     queryClient.setQueriesData(
  //       ["event", id],
  //       data,
  //       error,
  //       context.previousEvent,
  //     );
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["event", id]);
  //   },
  // });

  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
  }

  let content;

  // if (isError) {
  //   content = (
  //     <>
  //       <ErrorBlock
  //         title="OOPS!!!"
  //         message={error?.info?.message || "Unable to fetch event detail"}
  //       />
  //       <div className="form-actions">
  //         <Link to="../">Ok</Link>
  //       </div>
  //     </>
  //   );
  // }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Submitting....</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
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

export const action = async ({ request, params }) => {
  const id = params.id;
  console.log("request", request);

  const formData = await request.formData();
  console.log("formdata", formData);

  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: id, event: updatedEventData });
  await queryClient.invalidateQueries(["event"]);
  return redirect("../");
};
