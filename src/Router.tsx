import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import Main from "./components/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main child={<HomePage />} />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
