import { Link, Outlet, useParams } from "react-router-dom";

import Header from "../Header.jsx";

import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event-detail"],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  console.log("data", data);

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
              <button>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src="" alt="" />
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
