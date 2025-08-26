import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("Fetching available places...");
    async function fetchPlaces() {
      console.log("inside fetchPlaces");
      setIsFetching(true);
      try {
        console.log("inside trycatch");

        // const places = await fetchAvailablePlaces();

        // console.log("fetched places", places);
        const places = await fetch("http://localhost:3000/places");
        const resData = await places.json();
        console.log("available places", resData);

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch places" });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="Unexpected error" message={error.message} />;
  }

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
