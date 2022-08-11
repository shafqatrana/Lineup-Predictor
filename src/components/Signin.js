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
      <div className='signin_header'>
        <h1 className="signin_title">Sign in to your account</h1>
      </div>
      <form onSubmit={handleSubmit} className="signin_form">
        <div className="signin_email">
          <label className="signin_emailTitle">Email Address</label>
          <input
           onChange={(e) => setEmail(e.target.value)}
           className="signin_input" 
           type="email" 
          />
        </div>
        <div className="signin_password">
          <label className="signin_passwordTitle">Password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          className="signin_input" 
          type="password" 
          />
        </div>
        <button className="signin_button">
          Sign In
        </button>
      </form>
      <div className='signin_redirects'>
        <p className="signin_redirectTitle">Don't have an account? 
            <Link to='/signup' className="signin_redirectSignup">
              Sign Up
            </Link>
        </p>
        <p className="signin_redirectTitle">Forgot your password? 
            <Link to='/forgotpassword' className="signin_redirectForgot">
              Click Here
            </Link>
        </p>
      </div>
    </div> 
  );
}

export default Signin