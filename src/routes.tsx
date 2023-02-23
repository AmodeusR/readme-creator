import { createBrowserRouter } from "react-router-dom";
import { Home, Creator } from "./pages";

export const routes = createBrowserRouter([{
  path: "/",
  element: <Home />
}, {
  path: "/criar",
  element: <Creator />
}]);