import "../style/register.scss";
import FormGroup from "../components/FormGroup.jsx";
import { Link } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  }

  return (
    <div>
      <main className="register-page">
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="username"
              placeholder="Enter your username"
            />
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
              Register
            </button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
