import React from 'react';
import './Login.scss';

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

        <button className='login-btn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
