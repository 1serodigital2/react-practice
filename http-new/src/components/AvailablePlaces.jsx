import { useEffect, useState } from "react";

import { fetchPlacesResponse } from "../http.js";

import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [userPlaces, setUserPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      try {
        const places = await fetchPlacesResponse();

        if (!places) {
          throw new Error("Could not fetch places.");
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sortedPlaces = sortPlacesByDistance(
              places,
              position.coords.latitude,
              position.coords.longitude
            );
            setUserPlaces(sortedPlaces);
            setIsLoading(false);
          },
          (geoError) => {
            setIsLoading(false);
            setError({
              message: geoError.message || "Could not get your location.",
            });
          }
        );
      } catch (error) {
        setIsLoading(false);
        setError({
          message:
            error instanceof Error
              ? error.message
              : "Something went wrong - please try again later.",
        });
      }
    }

    fetchPlaces();
  }, []);

  const loadingText = isLoading ? "Loading places..." : "No places available.";

  if (error) {
    return (
      <Error
        title="An error occurred!"
        message={error.message}
        onConfirm={() => setError(null)}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={userPlaces}
      fallbackText={loadingText}
      onSelectPlace={onSelectPlace}
    />
  );
}
