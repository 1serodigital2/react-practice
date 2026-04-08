import { useState } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";

import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, deleteEvent, queryClient } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const {
    mutate,
    isPending: isDeletePending,
    isError: deleteIsError,
    error: deleteError,
  } = useMutation({
    mutationFn: () => deleteEvent({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
    onError: () => {
      console.log("unable to delete event");
    },
  });

  const handleStartDelete = () => {
    setIsDeleting(true);
  };
  const handleStopDelete = () => {
    setIsDeleting(false);
  };
  const handleDeleteEvent = () => {
    mutate({ id });
  };

  // const handleDelete = () => {
  //   handleDeleteEvent();
  // }

  return (
    <>
      {isDeleting && (
        <Modal onClick={handleStopDelete}>
          <h2>Delete event</h2>
          <p>Are you sure to delete this event</p>
          <div className="form-actions">
            {isDeletePending && <p>Please wait. Event is deleting...</p>}
            {!isDeletePending && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDeleteEvent} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {deleteIsError && (
            <ErrorBlock
              title="Unable to delete"
              message={
                deleteError?.info?.message ||
                "Something went wrong while deleting"
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading && (
        <div className="center">
          <LoadingIndicator />
        </div>
      )}
      {isError && (
        <ErrorBlock
          title="Error"
          message={error?.info?.message || "Unable to fetch event detail"}
        />
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img
              src={data?.image ? `http://localhost:3000/${data.image}` : ""}
              alt=""
            />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
