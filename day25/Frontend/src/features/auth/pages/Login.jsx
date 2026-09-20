import "../style/login.scss";
import FormGroup from "../components/FormGroup.jsx";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router";
import { useState } from "react";


const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  }

  return (
    <div>
      <main className="login-page">
        <div className="form-container">
          <h2>Login</h2>
          <form
          
          onSubmit={handleSubmit}
          >
            <FormGroup
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="email"
              placeholder="Enter your email"
            />
            <FormGroup
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="password"
              placeholder="Enter your password"
            />
            <button className="button" type="submit">
              Login
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
