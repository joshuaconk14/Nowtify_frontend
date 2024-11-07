import React, {useEffect, useState} from 'react';
import './login.css';

function Login() {

  // state variable for spotify login
  const [goToUserAuth, setGoToUserAuth] = React.useState(false)



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
        
        <form>
          <input type="text" name="username" placeholder="username" className="username-box" />
          <input type="password" name="password" placeholder="password" className="password-box" />
          <input type="submit" value="login" className="login-submit" />
        </form>

        <button onClick={() => setGoToUserAuth(true)} className="spotify-login-button">
          Login through Spotify
        </button>
      </div>
    </div>
  );
}


export default Login