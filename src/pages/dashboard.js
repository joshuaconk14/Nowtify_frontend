import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard() {
  const [user, setUser] = React.useState("");
  // const [playlists, setPlaylists] = useState([]); // ##########

  // use Effect for /@me session verification / extracting info from that route
  useEffect (() => {
    const checkSession = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:5003/@me', 
          {
          withCredentials: true,
        });
        console.log("Response from /@me:", response.data);
        if (response.data.logged_in) {
          setUser(response.data.username);  // Sets the whole response, so we can access user.username
        } else {
          window.location.href = '/login'; // Redirect if not logged in
        }
      } catch (error) {
        console.error("Not authenticated", error);
      }
    };

    checkSession()
  }, []);





  // logout
  const logout = async () => {
    try {
      await axios.post('http://127.0.0.1:5003/logout', {}, 
        { withCredentials: true }
      );
      window.location.href = '/'; // Redirect to home after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  // Conditionally render content based on `user`
  return (
    <div>
        <h1 className="hello">Hello, {user}!</h1>
        <h2 className="welcome">Welcome to your Dashboard!</h2>
        <button type="button" onClick={logout} className="logout">
          Logout
        </button>
    </div>
  );
}

export default Dashboard
