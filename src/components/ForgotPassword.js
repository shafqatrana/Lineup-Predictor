import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import "../styling/ForgotPassword.css"

const ForgotPassword = () => { 
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { forgotPassword } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await forgotPassword(email)
          //Maybe change this to a toast in future
          alert("Password reset email sent")
          navigate('/account')
        } catch (e) {
          setError(e.message)
          //Maybe change this to a toast in future
          alert("Invalid email address")
          console.log(e.message)
        }
    };

    return (
        <div className='forgot-password'>
            <div className='fogot-password-header'>
                <h1 className="forgot-password-title">Reset your password</h1>
            </div>

            <form onSubmit={handleSubmit} className="forgot-password-form">
                <div className="forgot-password-email">
                    <label className="forgot-password-email-title">Email Address</label>
                    <input
                     onChange={(e) => setEmail(e.target.value)}
                     className="forgot-password-input" 
                     type="email" 
                    />
                </div>
                <button className="forgot-password-button">
                    Submit
                </button>
            </form>
            
            <div className='forgot-password-redirects'>
                <p className="forgot-password-redirect-title">Don't have an account? 
                <Link to='/signup' className="forgot-password-redirect-signup">
                    Sign Up
                </Link>
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword