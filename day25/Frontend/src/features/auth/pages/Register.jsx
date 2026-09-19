import "../style/register.scss"
import FormGroup from "../components/FormGroup.jsx"

const Register = () => {
  return (
    <div>
      <main className="register-page">
        <div className="form-container">
          <h2>Register</h2>
          <form>
            <FormGroup label="username" placeholder="Enter your username" />
            <FormGroup label="email" placeholder="Enter your email" />
            <FormGroup label="password" placeholder="Enter your password" />
            <button className="button" type="submit">
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register
