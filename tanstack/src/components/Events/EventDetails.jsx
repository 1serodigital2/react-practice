import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";

import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, deleteEvent, queryClient } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  console.log("data", data);

  const { mutate } = useMutation({
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

  const handleDeleteEvent = () => {
    mutate({ id });
  };

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading && <LoadingIndicator />}
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
              <button onClick={handleDeleteEvent}>Delete</button>
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
