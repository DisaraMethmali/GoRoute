import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../src/assets/img.png';
import './login.css';

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your actual login API call
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Handle successful login (e.g., save token, redirect)
      console.log('Login Successful:', data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='user-register'>
        <div className="register-header">
          
        </div>
        <div className="login-container">
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              className="login-input" 
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="login-input" 
            />
            <button disabled={loading} onClick={handleClick} className="login-button">
              {loading ? 'Loading...' : 'Login'}
            </button>
            {error && <span className="error-message">{error.message}</span>}
          </div>
          <div>
            <br />
            <Link className='user-register-login' to={'/busOwner'}> 
              <button className='busOwnerBtn'>
                Bus Owner
              </button>
            </Link>
        </div>
        </div>
        <br />
        <h6 className='user-register-login'>
          Do not have an Account? <Link className='user-register-login' to={'/register'}> Sign up</Link>
        </h6>
      </div>
    </>
  );
}

export default LoginComponent;
