import "../style/login.scss"
import FormGroup from "../components/FormGroup.jsx"
import {Link} from "react-router"
const Login = () => {
  return (
    <div>
      <main className="login-page">
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <FormGroup label="username" placeholder="Enter your username" />
            <FormGroup label="password" placeholder="Enter your password" />
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
  )
}

export default Login
