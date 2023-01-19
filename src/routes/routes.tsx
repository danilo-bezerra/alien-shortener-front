import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Redirector } from "../pages/Redirector";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="/:surname" element={<Redirector />} />
    </Route>
  )
);

export default function () {
  return <RouterProvider router={router} />;
}
