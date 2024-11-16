import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import './home.css'; // import CSS styling
import './App.css'; // import whole app styling
// import { BrowserRouter as useNavigate} from "react-router-dom";

function Home() {


  // step 1) state variable for login / reg link, set false first
  const [goToLogin, setGoToLogin] = React.useState(false)
  const [goToRegister, setGoToRegister] = React.useState(false)


  // step 3) if state var = true, nav to login / reg
  if (goToLogin) {
    return <Navigate to = "/login"/>;
  }
  if (goToRegister) {
    return <Navigate to = "/register"/>;
  }


  //  step 2) buttons have function call state variable to make it true
  return (
    
    <div>
      <h1 className="nowtify-header">Nowtify</h1>
      <p className="slogan" >Find the perfect playlist for your now.</p>
      <p className="fade">No account? Register your spotify account here</p>
      <button onClick = { () => setGoToRegister(true)} className="fade">Register</button>
      <button onClick = { () => setGoToLogin(true)} className="login-button" >Login</button>
    </div>
  );
}

export default Home