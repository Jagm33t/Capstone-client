import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Login() {

  const [stored, setStored] = useState('');
  const [userId, setUserId] = useState('');

  function checkLogin() {
    if (stored === 'john.smith@example.com') {
      setUserId('1');
      localStorage.setItem('userId','1');
    } else if (stored === 'emily.johnson@example.com') {
      setUserId('2');
      localStorage.setItem('userId','2');
    }
  }
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
            value={stored}
            onChange={(e) => setStored(e.target.value)}

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

        <Link to="/features" className="login-btn" type="submit" onClick={checkLogin}  >Login</Link>

      </form>
    </div>
  );
}

export default Login;
