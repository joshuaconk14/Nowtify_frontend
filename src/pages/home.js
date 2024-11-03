import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import './home.css'; // import CSS styling
// import { BrowserRouter as useNavigate} from "react-router-dom";

function Home() {


  // step 1) state variable for login / reg link, set false first
  const [goToLogin, setGoToLogin] = React.useState(false)


  // step 3) if state var = true, nav to login / reg
  if (goToLogin) {
    return <Navigate to = "/login"/>;
  }


  //  step 2) buttons have function call state variable to make it true
  return (
    
    <div>
      <h1>Nowtify</h1>
      <button onClick = { () => setGoToLogin(true)}>Login</button>
    </div>
  );



  // const navigate = useNavigate();

  //   // buttons have function call state variable to make it true
  //   return (
  //     <div>
  //       <h>HOME PAGE</h>
  //       <button onClick = { () => navigate('/login')}>Login</button>
        
  //     </div>
  //   );
}

export default Home
