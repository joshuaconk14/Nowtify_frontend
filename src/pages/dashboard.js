// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './dashboard.css';

// function Dashboard() {
//   const [user, setUser] = React.useState("");
//   const navigate = useNavigate();
//   const [playlists, setPlaylists] = useState([]);


//   // use Effect for /@me session verification / extracting info from that route
//   useEffect (() => {
//     const checkSession = async() => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5003/@me',
//           {
//           withCredentials: true,
//         });
//         console.log("Response from /@me:", response.data); // test for response
//         if (response.status === 200) {
//           setUser(response.data.username);  // Sets the whole response, so we can access user.username
//           fetchPlaylists(); // fetch playlists after confirming user is logged in
//         } else {
//           window.location.href = '/login'; // Redirect if not logged in
//         }
//       } catch (error) {
//         console.error("Not authenticated", error); // test for error
//       }
//     };

//     checkSession();

//   }, []);




//   const location = useLocation();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const accessToken = queryParams.get('access_token');

//     if (accessToken) {
//       // Store the access token in state or context, or use it to fetch playlists
//       console.log('Access Token:', accessToken);
//       // You can now use this token to fetch playlists or store it in your app's state
//     }
//   }, [location]);



//   // const for GET request to fetch Playlists
//   const fetchPlaylists = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5003/playlists',
//         {
//           withCredentials: true,
//       });
//       console.log(response.data.playlists); // *** test for response ***
//       if (response.status === 200) {
//         setPlaylists(response.data.playlists); // call setPlaylists function and give state var the playlist data
//       }
//     } catch (error) {
//       console.error("Error fetching playlists:", error);
//     }
//   };










//   // logout
//   const logout = async () => {
//     try {
//       await axios.post('http://127.0.0.1:5003/logout', {}, 
//         { withCredentials: true }
//       );
//       window.location.href = '/'; // Redirect to home after successful logout
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };


//   // state variable for spotify login
//   const [goToUserAuth, setGoToUserAuth] = React.useState(false)

//   // redirect for spotify login
//   if (goToUserAuth === true) {
//     navigate("/spotauth");
//     // window.location.href = "http://127.0.0.1:5003/spotify-login";
//   }


//   // Conditionally render content based on `user`
//   return (
//     <div>
//       <h1 className="hello">Hello, {user}!</h1>
//       <h2 className="welcome">Welcome to your Dashboard!</h2>
//       <button type="button" onClick={logout} className="logout">
//         Logout
//       </button>
//       <h3 className="your-playlists">Your Playlists</h3>
//       <div className="playlists-container">
//         {Array.isArray(playlists) && playlists.length > 0 ? (
//           playlists.map(playlist => (
//             <div key={playlist.id} className="playlist-card">
//               {playlist.image && <img src={playlist.image} alt={playlist.name} className="playlist-image" />}
//               <h4 className="playlist-title">{playlist.name}</h4>
//               <a href={playlist.url} target="_blank" rel="noopener noreferrer" className="open-spotify">Open in Spotify</a>
//             </div>
//           ))
//         ) : (
//           <p className="no-playlists">No playlists found.</p>
//         )}
//       </div>
//       <button onClick= {() => setGoToUserAuth(true)} className ="spotify-connect-button">
//           Connect Spotify Playlists
//           </button>
//     </div>
//   );
// }

// export default Dashboard;


























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const [user, setUser] = React.useState("");
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null); // State to hold any error messages



  // use Effect for /@me session verification / extracting info from that route
  useEffect (() => {
    const checkSession = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:5003/@me',
          {
          withCredentials: true,
        });
        console.log("Response from /@me:", response.data); // test for response
        if (response.status === 200) {
          setUser(response.data.username);  // Sets the whole response, so we can access user.username
          fetchPlaylists(); // fetch playlists after confirming user is logged in
        } else {
          window.location.href = '/login'; // Redirect if not logged in
        }
      } catch (error) {
        console.error("Not authenticated", error); // test for error
      }
    };

    checkSession();

  }, []);




  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (code) {
        // You can optionally send the code to your backend to handle the token exchange
        axios.get(`http://localhost:5003/callback?code=${code}`,
          {
            withCredentials: true,
          }
        )
            .then(response => {
                console.log('Callback response:', response.data);
                // Now fetch playlists
                fetchPlaylists();
            })
            .catch(error => {
                console.error('Error during callback:', error);
            });
    }
  }, [location]);

  const fetchPlaylists = async () => {
      try {
          const response = await axios.get('http://localhost:5003/playlists', {
              withCredentials: true, // Include credentials if needed
          });
          console.log('Fetched Playlists:', response.data);
          // Handle the playlists data (e.g., set it in state)
          setPlaylists(response.data.items); // Set the fetched playlists in state

      } catch (error) {
          console.error('Error fetching playlists:', error);
          setError('Error fetching playlists.'); // Set error message

      }
  };


  const popPlaylist = async (p) => { // p is like a copy of the playlist id and is used to pass into / work in functions for it
    try {
      const response = await axios.post('http://localhost:5003/unlink-playlist',
        {p},
        {withCredentials: true},
      );
      if (response.status === 200);
        setPlaylists(playlists.filter( playlist => playlist.id != p)) // playlists is the state variable, playlist is the actual object
    } catch (error) {
      console.log('Error unlinking playlist', error)
      setError('Error unlinking playlist.');
    }
  };










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


  // state variable for spotify login
  const [goToUserAuth, setGoToUserAuth] = React.useState(false)

  // redirect for spotify login
  if (goToUserAuth === true) {
    navigate("/spotauth");
  }


  // Conditionally render content based on `user`
  return (
    <div className="dashboard-body">
      {/* Top Section */}
      <div className="top-section">
        <h1 className="hello">Hello, {user}!</h1>
        <h2 className="welcome">Welcome to your Dashboard!</h2>
        <button type="button" onClick={logout} className="logout">
          Logout
        </button>
      </div>
  
      {/* Middle Section (Spotify button) */}
      <div className="middle-section">
        <button
          onClick={() => setGoToUserAuth(true)}
          className="spotify-connect-button"
        >
          Connect to Spotify
        </button>
        <h3 className="your-playlists">Your Playlists</h3>
      </div>
  
      {/* Bottom Section (Playlists) */}
      <div className="bottom-section">
        <div className="playlists-container">
          {Array.isArray(playlists) && playlists.length > 0 ? (
            playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-card">
                {playlist.images && playlist.images.length > 0 && (
                  <img
                    src={playlist.images[0].url}
                    alt={playlist.name}
                    className="playlist-image"
                  />
                )}
                <h4 className="playlist-title">{playlist.name}</h4>
                <a
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-spotify"
                >
                  Open in Spotify
                </a>
                <button
                  onClick={() => popPlaylist(playlist.id)}
                  className="playlist-unlink"
                >
                  Unlink Playlist
                </button>
              </div>
            ))
          ) : (
            <p className="no-playlists">No playlists found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;