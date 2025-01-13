import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';  // Import the config file to get the baseUrl

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('consumer');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!username || !email || !password) {
      setErrorMessage('All fields are required!');
      return;
    }

    const data = { username, email, password, role };

    try {
      // Send signup request to backend with the baseUrl
      const response = await axios.post(`${config.baseUrl}/signup`, data);

      // Show success message and navigate to login page
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      // Handle different errors gracefully
      if (error.response) {
        setErrorMessage(error.response?.data?.error || 'Error occurred during sign up');
      } else {
        setErrorMessage('Error occurred during sign up');
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="creator">Creator</option>
          <option value="consumer">Consumer</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
