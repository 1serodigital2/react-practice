import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setavailablePlaces] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5173/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => setavailablePlaces(resData.places));
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
