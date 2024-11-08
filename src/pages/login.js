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

  // button setting variables to true
  return (
    <div class ="container">
      <div class="big-rectangle">
        <h1 class="login-header">Login</h1>
        <p class ="welcome-back-text">Welcome back!</p>
        
    
        <form>
          <input type="text" name="username" placeholder="username" class ="username-box" />
          <input type="password" name="password" placeholder="password" class ="password-box" />
          <input type="submit" value="login" className="login-submit" />
        </form>

        <button onClick={() => setGoToUserAuth(true)} class ="spotify-login-button">
          Login through Spotify
        </button>
      </div>
    </div>
  );
}


export default Login