import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';  // Import the config file to get the baseUrl

function Login({ setUserRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      // Send login request to backend with the baseUrl
      const response = await axios.post(`${config.baseUrl}/login`, data);

      // If successful, save the token and role
      localStorage.setItem('token', response.data.token);
      setUserRole(response.data.user.role);  // Set role in parent state

      // Redirect user to the correct dashboard based on their role
      if (response.data.user.role === 'creator') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      alert('Login failed: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
