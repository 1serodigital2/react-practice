export async function fetchAvailablePlaces() {
  console.log("fetch available places init");
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  console.log("resData", resData);
  if (!response.ok) {
    throw new Error("Error fetching places");
  }
  console.log("resdata", resData);
  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }
  console.log("user places", resData);
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update use place");
  }
  console.log("selected place", places);

  return resData.message;
}
