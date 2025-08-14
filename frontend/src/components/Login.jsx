import React from "react";
import axios from "axios";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/auth/login", { 
      email: email, 
      password: password 
    })
      .then((response) => {
        console.log("Login successful:", response.data);
        alert("Login successful!");
        const userData = response.data.user;
        localStorage.setItem("user", JSON.stringify(userData));
        navigate('/home');
      })
      .catch((error) => {
        console.error("Login error:", error.response?.data?.message || error.message);
        alert(error.response?.data?.message || "Login failed.");
});
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="tree">
            <div className="leaves"></div>
            <div className="trunk"></div>
        </div>
        <div className="floating-leaves leaf-1"></div>
        <div className="floating-leaves leaf-2"></div>
        <div className="floating-leaves leaf-3"></div>
        <div className="ground"></div>
      </div>
      <div className="right-panel">
        <div className="login-form">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="remember-forgot">
              <label className="remember-me">
                <input type="checkbox" id="remember"/>
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">Login</button>
            <p className="signup-link">Don't have an account?
            <a href="/register" className="registration-link">
          Register here
        </a></p>
          </form>
      </div>
    </div>
  </div>
  );
}

export default Login;