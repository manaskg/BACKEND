// hook layer ka kam h api layer aur state layer ko manage krna
// so all state variables and api have to be imported
import { login, register, getMe } from "../services/auth.api.js";
import { AuthContext } from "../auth.context.jsx";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, password) => {
    setLoading(true);

    const response = await login(username, password);

    setUser(response.user);

    setLoading(false);
  };

  const handleRegister = async (email, username, password) => {
    setLoading(true);
    const response = await register(email, username, password);
    setUser(response.user);
    setLoading(false);
  };

  return { user, loading, handleLogin, handleRegister };
};
