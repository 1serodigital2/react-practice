import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../utils/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchedTerm, setSearchedTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchedTerm(searchElement.current.value);
  }

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["events", { search: searchedTerm }],
    queryFn: () => fetchEvents(searchedTerm),
  });

  let content = <p>Please enter a search term to find event</p>;

  if (isPending) {
    content = <LoadingIndicator />;
  }
  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events"}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
      {/* <p>Please enter a search term and to find events.</p> */}
    </section>
  );
}
