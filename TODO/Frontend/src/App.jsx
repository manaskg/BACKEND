import { router } from "./app.routes";
import "./features/shared/global.scss";
import { RouterProvider } from "react-router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
