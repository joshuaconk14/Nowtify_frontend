import React, { useEffect } from 'react';
import axios from 'axios';

function SpotAuth() {
  useEffect(() => {
    const fetchAuthUrl = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5003/spotify-login');
        const authUrl = response.data.auth_url;

        // Redirect to the Spotify authorization URL
        window.location.href = authUrl;
      } catch (error) {
        console.error('Error fetching auth URL:', error);
      }
    };

    fetchAuthUrl();
  }, []);

  return (
    <div>
      <h1>Redirecting to Spotify for authentication...</h1>
      <p>If you are not redirected, <a href="http://127.0.0.1:5003/spotify-login">click here</a>.</p>
    </div>
  );
}

export default SpotAuth;