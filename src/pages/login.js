import React, {useEffect, useState} from 'react';
import './login.css';

function Login() {

  const [goToUserAuth, setGoToUserAuth] = React.useState(false)

  // use window.location.href when linking to pages in diff venv
    // return null says to React don't run anything w < Navigate />
      // window.location.href will handle redirection
  if (goToUserAuth) {
    window.location.href = "http://127.0.0.1:5003/spotify-login";
  }

  return (
    <div>
      <div class="big-rectangle">
      <h1 class="login-header"> Login</h1>
      <p class="welcome-back-text">Welcome back!</p>
      <button class="username-box"> username</button>
      <button class="password-box">password</button>
      <button onClick = { () => setGoToUserAuth(true)} class = "spotify-login-button" >Login through Spotify</button>
      </div>
    </div>
  );
}

export default Login