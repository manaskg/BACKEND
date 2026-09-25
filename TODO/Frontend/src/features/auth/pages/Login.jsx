import { Link } from "react-router"
import "./style/form.scss"

const Login = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <input type="email" name="email" id="email" placeholder="Enter email" pattern="[a-zA-Z0-9._+]+@brainwareuniversity\.ac\.in" title="please enter brainware university email" />
                <input type="password" name="password" id="password" placeholder="Enter password" />
                <button className="button login-button primary-button">Login</button>
            </form>
            <p>Don't have an account? <Link to={"/register"}>Register</Link> </p>
        </div>
    </main>
  )
}

export default Login
