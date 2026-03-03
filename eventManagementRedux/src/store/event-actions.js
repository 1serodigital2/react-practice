import { eventAction } from "./";
import { uiAction } from "./ui-slice";

const BASE_URL =
  "https://event-management-ddff5-default-rtdb.asia-southeast1.firebasedatabase.app";

export const addEventsFirebasae = (event) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Processing",
        message: "Submitting event",
      }),
    );

    const submitEvent = async (eventDetail) => {
      const response = await fetch(`${BASE_URL}/reduxEvent.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetail),
      });

      console.log("event repsonse firebase", response);
      console.log("event repsonse name", response.name);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const resData = await response.json();

      console.log("event submission response", resData);

      if (!resData.name) {
        throw new Error("Firebase did not return an ID");
      }

      return resData;
    };

    try {
      const submissionResponse = await submitEvent(event);
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Hurrah!",
          message: "Events submitted successfully",
        }),
      );
      return submissionResponse;
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "OOPS!",
          message: "Something went wrong",
        }),
      );
      console.error("Something went wrong", error);
    }
  };
};

export const getEventsFirebase = () => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Fetching events",
        message: "Please wait for a min",
      }),
    );
    try {
      const response = await fetch(`${BASE_URL}/reduxEvent.json`);
      // console.log("fetched firebase events", response);
      if (!response.ok) {
        throw new Error("Unable to get event");
      }

      const resData = await response.json();
      console.log("fetched firebase events", resData);

      let eventList = [];

      for (const [eventKey, event] of Object.entries(resData)) {
        let currentEvent = {
          eventId: eventKey,
          name: event.name,
          date: event.date,
          location: event.location,
        };
        eventList.push(currentEvent);
      }

      console.log("formatted events", eventList);

      dispatch(eventAction.setEvents(eventList));

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Hurrah",
          message: "Events successfully fetched",
        }),
      );
      return resData;
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "OOPS!!",
          message: "Uable to fetch events",
        }),
      );
      console.error("Fatal error in getEventsFirebase", error);
    }
  };
};

export const deleteEventFirebase = (eventId) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Deleting event",
        message: "Event is being deleted",
      }),
    );

    try {
      const response = await fetch(`${BASE_URL}/reduxEvent/${eventId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventId),
      });

      if (!response.ok) {
        throw new Error("Error while deleting event");
      }

      const resData = await response.json();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "HURRAH!",
          message: "Event deleted successfully",
        }),
      );
      return resData;
    } catch (error) {
      console.error("Unable to delete event", error);
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "OOPS!",
          message: "Something went wrong",
        }),
      );
    }
  };
};

export const updateEventFirebase = (eventDetail) => {
  return async (dispatch) => {
    console.log("updateEventFirebase", eventDetail);

    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Processing",
        message: "Event is being updated",
      }),
    );

    const updateEvent = async (event) => {
      const response = await fetch(
        `${BASE_URL}/reduxEvent/${event.eventId}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: event.name,
            date: event.date,
            location: event.location,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Unable to update event");
      }

      const resData = await response.json();
      return resData;
    };

    try {
      updateEvent(eventDetail);
    } catch (error) {
      console.error("somethign went wrong while updating event", error);
    }
  };
};
