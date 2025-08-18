export async function fetchAvailablePlaces(endpoint) {
  const response = await fetch(endpoint);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  console.log("resdata", resData);
  return resData.places;
}
