import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import "../styling/Signin.css"

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
 
  return (
    <div className='signin'>
      <div className='signin-header'>
        <h1 className="signin-title">Sign in to your account</h1>
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="signin-email">
          <label className="signin-emailTitle">Email Address</label>
          <input
           onChange={(e) => setEmail(e.target.value)}
           className="signin-input" 
           type="email" 
          />
        </div>
        <div className="signin-password">
          <label className="signin-password-title">Password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input" 
          type="password" 
          />
        </div>
        <button className="signin-button">
          Sign In
        </button>
      </form>
      <div className='signin-redirects'>
        <p className="signin-redirect-title">Don't have an account? 
            <Link to='/signup' className="signin-redirect-signup">
              Sign Up
            </Link>
        </p>
        <p className="signin-redirect-title">Forgot your password? 
            <Link to='/forgotpassword' className="signin-redirect-forgot">
              Click Here
            </Link>
        </p>
      </div>
    </div> 
  );
}

export default Signin