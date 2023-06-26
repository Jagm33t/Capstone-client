import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login-container">
      
      <form className="login-form">
      <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="login-username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="login-password"
          />
        </div>

        <Link to="/features" className="login-btn" type="submit">Login</Link>

      </form>
    </div>
  );
}

export default Login;
