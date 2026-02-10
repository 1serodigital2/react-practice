import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/dashboard/Home";
import NewEventPage from "./pages/dashboard/NewEvent";
import RootLayout from "./pages/dashboard/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "new", element: <NewEventPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
