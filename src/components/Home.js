import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Video Distribution Platform</h1>
      <p>Please sign up or log in to continue</p>
      <button>
        <Link to="/signup">Sign Up</Link>
      </button>
      <button>
        <Link to="/login">Log In</Link>
      </button>
    </div>
  );
}

export default Home;
