export async function fetchPlacesResponse() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  return resData.places;
}
