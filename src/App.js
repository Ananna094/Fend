import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [userRole, setUserRole] = useState(null); // To manage user role after login

  return (
    <Router>
      <div className="App">
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setUserRole={setUserRole} />} />
          <Route path="/dashboard" element={<Dashboard role={userRole} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
