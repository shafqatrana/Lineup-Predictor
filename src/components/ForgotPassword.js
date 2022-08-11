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
        <div className='forgotPassword'>
            <div className='fogotPassword_header'>
                <h1 className="forgotPassword_title">Reset your password</h1>
            </div>

            <form onSubmit={handleSubmit} className="forgotPassword_form">
                <div className="forgotPassword_email">
                    <label className="forgotPassword_emailTitle">Email Address</label>
                    <input
                     onChange={(e) => setEmail(e.target.value)}
                     className="forgotPassword_input" 
                     type="email" 
                    />
                </div>
                <button className="forgotPassword_button">
                    Submit
                </button>
            </form>
            
            <div className='forgotPassword_redirects'>
                <p className="forgotPassword_redirectTitle">Don't have an account? 
                <Link to='/signup' className="forgotPassword_redirectSignup">
                    Sign Up
                </Link>
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword