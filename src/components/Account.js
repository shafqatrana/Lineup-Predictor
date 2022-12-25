import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import '../styling/Account.css'

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="account">
      <h1 className="account-title">Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  )
}

export default Account