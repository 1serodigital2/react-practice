import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      async function fetchPlaces() {
        setIsFetching(true);
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        setAvailablePlaces(resData.places);
      }
    } catch (error) {
      setError({ message: error.message || "Could not fetch places" });
    }
    setIsFetching(false);

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Places is loading...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
