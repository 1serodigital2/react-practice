export async function fetchAvailablePlaces(endpoint) {
  const response = await fetch(endpoint);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  console.log("resdata", resData);
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-placesss", {
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
