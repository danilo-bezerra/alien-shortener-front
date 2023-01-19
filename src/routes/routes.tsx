import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Redirection } from "../pages/Redirector";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="/:surname" element={<Redirection />} />
    </Route>
  )
);

export default function () {
  return <RouterProvider router={router} />;
}
