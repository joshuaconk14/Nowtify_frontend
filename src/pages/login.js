import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';


function Login() {

  // state variables for main login (usrn , paswrd, and error msg)
  const [username, setUsername] = useState(''); // used in buttons
  const [password, setPassword] = useState(''); // used in buttons
  const [error, setError] = useState(''); // used in handleLogin funciton
  const navigate = useNavigate(); // used in if statment for 200 status

  // state variable for spotify login
  const [goToUserAuth, setGoToUserAuth] = React.useState(false)

  // constant for handling login functions
    // async allows constant to handle functions that take time (for this, an API call)
      // pair it with await so can only move to next line of code until API call is complete
      // e is the event object for an event handler, represents event that occured
  const handleLogin = async (e) => {
    console.log(username, password) // log in console to make sure data is coming back from backend
    try {
      e.preventDefault() // make it so that page doesn't refresh after login so error msg can stay
      // Send login request
      const response = await axios.post(
        'http://127.0.0.1:5003/user-login',
        { username, password }, // data sent in the POST request w/ 'username' and 'password' properties. will be sent as JSON and must match w/ backend request
        { withCredentials: true } // Keep session active by allowing cookies
      );

      if (response.status === 200) {
        navigate('/dashboard'); // Redirect to dashboard on successful login
        console.log('Login successful:', response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password.');
      }
    }
  };


  // use window.location.href when linking to pages in diff venv
  // return null says to React don't run anything w < Navigate />
    // window.location.href will handle redirection
  if (goToUserAuth) {
    window.location.href = "http://127.0.0.1:5003/spotify-login";
  }


  return (
    <div className="container">
      <div className="big-rectangle">
        <h1 className="login-header">Login</h1>
        <p className="welcome-back-text">Welcome back!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            id = "username"
            autoComplete = "username"
            className="username-box"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id = "password"
            autoComplete = "current-password"
            className="password-box"
          />
          <button type="submit" className="login-submit">
            Login
          </button>
          {error && <p className="error-msg">{error}</p>}
        </form>
        <button onClick={() => setGoToUserAuth(true)} className ="spotify-login-button">
          Login through Spotify
          </button>
      </div>
    </div>
  );
}

export default Login