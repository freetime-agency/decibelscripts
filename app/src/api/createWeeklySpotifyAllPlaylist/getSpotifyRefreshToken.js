const express = require('express');
const axios = require('axios');
const SPOTIFY_CLIENT_ID = '3b003caee0e4444592163fe28d995f57';
const SPOTIFY_CLIENT_SECRET = 'a59f45541892401bb374c5caf5598682';
const REDIRECT_URI = 'https://decibeldesignco.com/callback';

const app = express();

app.get('/login', (req, res) => {
  const scope = 'playlist-modify-public playlist-modify-private';
  res.redirect('https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      client_id: SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI
    }).toString()
  );
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      }).toString(),
      {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    // This is your refresh token - save this somewhere secure
    console.log('Your refresh token:', response.data.refresh_token);
    res.send('Got refresh token! Check the console.');
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.send('Error getting refresh token');
  }
});

app.listen(3000, () => {
  console.log('Visit http://localhost:3000/login to get your refresh token');
}); 