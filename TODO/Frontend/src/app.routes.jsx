import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Registration from "./features/auth/pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>HOME</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);
