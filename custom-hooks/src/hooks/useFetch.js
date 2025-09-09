import { useEffect, useState } from "react";

export function useFetch(fetchFn, availablePlaces = []) {
  const [isFetching, setIsFetching] = useState(false);
  const [userPlaces, setUserPlaces] = useState(availablePlaces);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setUserPlaces(places);
        console.log(" places fetched:", places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFn]);

  return {
    isFetching,
    userPlaces,
    error,
    setUserPlaces,
    setIsFetching,
  };
}
