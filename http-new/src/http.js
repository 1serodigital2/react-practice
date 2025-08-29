export async function fetchPlacesResponse() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Failed to fetch places.");
  }
  return resData.places;
}

export async function saveUserPlaces(selectedPlace) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: selectedPlace }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to save places.");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resdata = await response.json();
  if (!response.ok) {
    throw new Error(resdata.message || "Failed to fetch user places.");
  }
  return resdata.places;
}
