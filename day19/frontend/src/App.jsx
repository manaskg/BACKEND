import { RouterProvider } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import "./style.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
