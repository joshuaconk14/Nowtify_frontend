import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard() {
  const [username, setUsername] = useState('');
  const [playlists, setPlaylists] = useState([]); // ##########


  // useEffect to set username for user
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5003/@me', 
          { withCredentials: true }
        );
        if (response.data.logged_in) { // logged in status must be provided by /@me
          setUsername(response.data.username);
          // fetchPlaylists(); // ##########
        } else {
          window.location.href = '/login';
        }
      } catch (error) {
        console.log("Session check failed", error);
      }
    };
    checkSession();
  }, []);




// ##########



  // // Function to fetch playlists from the Flask backend
  // const fetchPlaylists = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:5003/playlists', { // Replace with the correct URL for your /playlists endpoint
  //         credentials: 'include' // Include credentials if necessary, such as cookies
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok: ' + response.statusText);
  //     }

  //     const playlistsData = await response.json();
  //     setPlaylists(playlistsData.items); // Save the fetched playlists to state
  //   } catch (error) {
  //     console.error('Error fetching playlists:', error);
  //     // Optionally display an error message on the UI
  //   }
  // };


  // // Function to display playlists on the UI
  // const displayPlaylists = () => {
  //   return playlists.map((playlist) => (
  //     <div className="playlist" key={playlist.id}>
  //       <h3>{playlist.name}</h3>
  //       <img src={playlist.images[0]?.url} alt={playlist.name} />
  //       <p>{playlist.description || 'No description available.'}</p>
  //     </div>
  //   ));
  // };


// ##########


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


  return (
    <div>
      <h1 className="hello">Hello, {username} (user)</h1>
      <h2 className="welcome">Welcome to your Dashboard! </h2>
      <button type = "button" onClick = {logout} className="logout">Logout</button>
      {/* <div id = "playlists-container">{displayPlaylists()}</div> */}
    </div>
  );
}

export default Dashboard
