import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'
import '../styling/Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      //Probably change this to a toast in the future
      alert('Passwords do not match')
    } else {
      try {
        setError('');
        await createUser(email, password);
        createUser()
        navigate('/account')
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup-header">
        <h1 className="signup-title">Signup for an account</h1>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-email">
          <label className="signup-email-title">Email Address</label>
          <input 
          onChange={(e) => setEmail(e.target.value)} 
          className="signup-input" 
          type="email" 
          />
        </div>
        <div className="signup-password">
          <label className="signup-password-title">Password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)} 
          className="signup-input" 
          type="password" 
          />
        </div>

        <div className="signup-password-confirm">
          <label className="signup-password-title">Confirm Password</label>
          <input 
          onChange={(e) => setPasswordConfirm(e.target.value)} 
          className="signup-input" 
          type="password" 
          />
        </div>

        <button className="signup-button">
          Sign Up
        </button>
      </form>
        <div className="signup-redirects">
          <p className="signup-redirect-title">Already have an account? 
             <Link to='/' className="signup-redirect-signin">
               Sign In
             </Link>
          </p>
        </div>
    </div> 
  );
}

export default Signup