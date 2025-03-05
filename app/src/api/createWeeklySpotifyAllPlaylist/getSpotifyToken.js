const express = require('express');
const { getTokens } = require('./spotifyAuth');
const app = express();
const PORT = 8888;

// Update the redirect URI in spotifyAuth.js to use localhost
const REDIRECT_URI = 'http://localhost:8888/callback';

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const tokens = await getTokens(code);
    console.log('\nAccess Token:', tokens.accessToken);
    console.log('\nRefresh Token:', tokens.refreshToken);
    res.send('Success! You can close this window.');
    process.exit(0);
  } catch (error) {
    res.send('Error: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`\nPlease visit this URL to authorize the application:`);
  console.log(`https://accounts.spotify.com/authorize?response_type=code&client_id=3b003caee0e4444592163fe28d995f57&scope=playlist-modify-public%20playlist-modify-private&redirect_uri=http://localhost:8888/callback`);
}); 