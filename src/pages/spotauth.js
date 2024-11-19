import React, { useEffect } from 'react';
import axios from 'axios';


function SpotAuth() {
  useEffect(() => {
    const fetchAuthUrl = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5003/spotify-login');
        const authUrl = response.data.auth_url; // auth_url is the URL from the backend where user authenticates, was returned as a jsonify object in backend

        // Redirect to the Spotify authorization URL
        if (response.status === 200) {
          window.location.href = authUrl;
        }
      } catch (error) {
        console.error('Error fetching auth URL:', error);
      }
    };

    fetchAuthUrl();
  }, []);


  return (
    <div>
      <h3>Redirecting to Spotify for authentication...</h3>
      <p>If you are not redirected, <a href="http://127.0.0.1:5003/spotify-login">click here</a>.</p>
    </div>
  );
}

export default SpotAuth;