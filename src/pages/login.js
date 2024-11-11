// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './login.css';



// function Login() {

//    // state variable for main login
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // state variable for spotify login
//   const [goToUserAuth, setGoToUserAuth] = React.useState(false)

//   const handleLogin = async (e) => {
//     try {
//       e.preventDefault() // make it so that page doesn't refresh after login so error msg can stay
//       // Send login request
//       const response = await axios.post(
//         'http://127.0.0.1:5003/user-login',
//         { username, password },
//         { withCredentials: true } // Keep session active by allowing cookies
//       );

//       if (response.status === 200) {
//         navigate('/dashboard'); // Redirect to dashboard on successful login
//       }
//     } catch (error) {
//       setError('Invalid username or password');
//     }
//   };


//   // use window.location.href when linking to pages in diff venv
//   // return null says to React don't run anything w < Navigate />
//     // window.location.href will handle redirection
//   if (goToUserAuth) {
//     window.location.href = "http://127.0.0.1:5003/spotify-login";
//   }


//   return (
//     <div className="container">
//       <div className="big-rectangle">
//         <h1 className="login-header">Login</h1>
//         <p className="welcome-back-text">Welcome back!</p>
//         <form>
//           <input
//             type="text"
//             placeholder="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="username-box"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="password-box"
//           />
//           <button type="button" onClick={handleLogin} className="login-submit">
//             Login
//           </button>
//           {error && <p className="error-msg">{error}</p>}
//         </form>
//         <button onClick={() => setGoToUserAuth(true)} class ="spotify-login-button">
//           Login through Spotify
//           </button>
//       </div>
//     </div>
//   );
// }

// export default Login;