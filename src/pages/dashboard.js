// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './dashboard.css';

// function Dashboard() {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/session-check', { withCredentials: true });
//         if (response.data.logged_in) {
//           setUsername(response.data.username);
//         } else {
//           window.location.href = '/login';
//         }
//       } catch (error) {
//         console.log("Session check failed", error);
//       }
//     };
//     checkSession();
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to your Dashboard {username}</h2>
//     </div>
//   );
// }

// export default Dashboard;
