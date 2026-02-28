import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dashboard/Home";
import NewEventPage from "./pages/dashboard/NewEvent";
import DashboardRootLayout from "./layouts/DashboardRootLayout";
import EventList from "./pages/dashboard/Events";
import EditEventPage from "./pages/dashboard/EditEvent";

import FrontendRootLayout from "./layouts/FrontedEndRootLayout";
import HomePage from "./pages/fontend/Home";
import EventsPage from "./pages/fontend/Events";

import EventsContextProvider from "./store/events-context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontendRootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "events", element: <EventsPage /> },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardRootLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "events", element: <EventList /> },
        { path: "new", element: <NewEventPage /> },
        { path: "edit/:eventKey", element: <EditEventPage /> },
      ],
    },
  ]);

  return (
    <EventsContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </EventsContextProvider>
  );
}

export default App;
