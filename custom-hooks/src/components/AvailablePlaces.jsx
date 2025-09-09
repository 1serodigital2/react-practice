import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isFetching, setIsFetching] = useState(false);
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [error, setError] = useState();

  const {
    isFetching,
    error,
    userPlaces: availablePlaces,
    setUserPlaces: setAvailablePlaces,
    setIsFetching,
  } = useFetch(fetchAvailablePlaces);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const sortedPlaces = sortPlacesByDistance(
  //       availablePlaces,
  //       position.coords.latitude,
  //       position.coords.longitude
  //     );
  //     setAvailablePlaces(sortedPlaces);
  //     setIsFetching(false);
  //   });
  // }, [availablePlaces, setAvailablePlaces, setIsFetching]);

  // navigator.geolocation.getCurrentPosition((position) => {
  //   const sortedPlaces = sortPlacesByDistance(
  //     availablePlaces,
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );
  //   setAvailablePlaces(sortedPlaces);
  //   setIsFetching(false);
  // });

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
