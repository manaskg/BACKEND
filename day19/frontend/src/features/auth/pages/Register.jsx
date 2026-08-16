import { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

const Register = () => {
  const { user, loading, handleRegister } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(email, username, password);
    console.log("user registered");
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            onInput={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="button primary-button">Register</button>
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
