import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import '../../styles/Dashboard.css';
import AddTransactionModal from '../../features/transactions/AddTransactionModal';

const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('authenticated');

    if (loggedInUser) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className='dashboard'>
        <h1>Welcome to Dashboard</h1>
        <p>All tha transactions made by the logged in user are given below.</p>
        <AddTransactionModal />
      </div>
    </>
  );
};

export default Dashboard;
