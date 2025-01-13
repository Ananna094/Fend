import React from 'react';

function Dashboard({ role }) {
  return (
    <div className="dashboard-container">
      <h1>{role === 'creator' ? 'Creator Dashboard' : 'Consumer Dashboard'}</h1>
      {role === 'creator' ? (
        <p>Welcome Creator! You can upload videos here.</p>
      ) : (
        <p>Welcome Consumer! Explore and watch videos.</p>
      )}
    </div>
  );
}

export default Dashboard;
