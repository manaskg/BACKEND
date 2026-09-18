import "../style/register.scss"

const Register = () => {
  return (
    <div>
      <main className="register-page">
        <div className="form-container">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
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
