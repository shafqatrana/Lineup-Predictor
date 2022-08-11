import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'
import '../styling/Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if (.current.value !== passwordConfirmRef.current.value) {
      //return setError("Passwords do not match")
    //}
    try {
      setError('');
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup_header">
        <h1 className="signup_title">Signup for an account</h1>
      </div>
      <form onSubmit={handleSubmit} className="signup_form">
        <div className="signup_email">
          <label className="signup_emailTitle">Email Address</label>
          <input 
          onChange={(e) => setEmail(e.target.value)} 
          className="signup_input" 
          type="email" 
          />
        </div>
        <div className="signup_password">
          <label className="signup_passwordTitle">Password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)} 
          className="signup_input" 
          type="password" 
          />
        </div>

        {/* GO BACK AND ADD THIS LATER */}
        <div className="signup_passwordConfirm">
          <label className="signup_passwordTitle">Confirm Password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)} 
          className="signup_input" 
          type="password" 
          />
        </div>

        <button className="signup_button">
          Sign Up
        </button>
      </form>
        <div className="signup_redirects">
          <p className="signup_redirectTitle">Already have an account? 
             <Link to='/' className="signup_redirectSignin">
               Sign In
             </Link>
          </p>
        </div>
    </div> 
  );
}

export default Signup