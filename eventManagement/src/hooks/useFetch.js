const BASE_URL =
  "https://event-management-ddff5-default-rtdb.asia-southeast1.firebasedatabase.app/events";

const useFetch = () => {
  // 🔹 POST
  const addEventApi = async (eventData) => {
    console.log("addEventApi", eventData);

    const response = await fetch(`${BASE_URL}.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error("Failed to add event");
    }

    return await response.json();
  };

  const getEventList = async () => {
    try {
      const response = await fetch(`${BASE_URL}.json`);
      if (!response.ok) {
        throw new Error("Unable to fetch events list");
      }

      const resData = await response.json();

      console.log("fetched events list", resData);
      return resData;
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteEvent = async (eventId) => {
    const response = await fetch(`${BASE_URL}.json`, {
      method: "DELETE",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(eventId),
    });

    if (!response.ok) {
      throw new Error("Unable to delete");
    }

    return true;
  };

  return {
    addEventApi,
    getEventList,
    deleteEvent,
  };
};

export default useFetch;
