import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/users/login', {username: username, password:password})
    .then ((response) => {
      const { accessToken,userId} =response.data;

      localStorage.setItem('jwtToken' , accessToken);
      localStorage.setItem('userId' , userId);

      alert("Login successful")
      window.location.href = '/features';

    })
    .catch((error) => {
      console.error('Login failed:', error);
      alert('Login failed')
    });
};
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}

          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
           type="password"
           id="password"
           className="login-password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/features" className="login-btn" type="submit" onClick={handleLogin}>Login</Link>

      </form>
    </div>
  );
}

export default Login;
