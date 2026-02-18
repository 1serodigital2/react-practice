const BASE_URL =
  "https://event-management-ddff5-default-rtdb.asia-southeast1.firebasedatabase.app/events";

const useFetch = () => {
  // 🔹 POST
  const addEventApi = async (eventData) => {
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

      let loadedEvents = [];

      for (const key in resData) {
        loadedEvents.push({
          firebaseKey: key,
          ...resData[key],
        });
      }

      console.log("fetched events list", loadedEvents);
      return loadedEvents;
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      console.log("deleteEvent event trigered", eventId);

      const response = await fetch(`${BASE_URL}/${eventId}.json`, {
        method: "DELETE",
      });

      console.log("deleteEvent response ", response);
      if (!response.ok) {
        throw new Error("Unable to delete");
      }
      return true;
    } catch (error) {
      console.log(" deleteEvent Something went wrong");

      throw error;
    }
  };

  return {
    addEventApi,
    getEventList,
    deleteEvent,
  };
};

export default useFetch;
