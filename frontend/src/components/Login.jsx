import React from "react";

function Login() {
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <a href="/register" className="registration-link">
        Register here
      </a>
    </div>
  );
}

export default Login;