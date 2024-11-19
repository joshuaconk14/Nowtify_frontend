import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post(
        'http://127.0.0.1:5003/register', // POST to backend
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('Username already exists.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };



  return (
    <div className="container">
      <div className="big-rectangle">
        <h1 className="login-header">Register</h1>
        <p className="welcome-back-text">Register here</p>
        <form>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-box"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-box"
          />
          <button type="button" onClick={handleRegister} className="login-submit">
            Submit
          </button>
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register