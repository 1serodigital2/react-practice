import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import NewEventPage from "./pages/CreateNewEvent";
import EditEventPage from "./pages/EditEvent";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "create-new", element: <NewEventPage /> },
      { path: "edit/:eventId", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
