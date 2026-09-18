import "../style/login.scss"
const Login = () => {
  return (
    <div>
      <main className="login-page">
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
