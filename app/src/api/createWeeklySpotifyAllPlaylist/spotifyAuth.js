const axios = require('axios');
const express = require('express');
const { saveRefreshToken, getStoredRefreshToken } = require('./tokenStore');

// Constants
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_CLIENT_ID = '3b003caee0e4444592163fe28d995f57';
const SPOTIFY_CLIENT_SECRET = 'a59f45541892401bb374c5caf5598682';
const REDIRECT_URI = 'http://localhost:8888/callback';

// Required scopes for playlist operations
const SCOPES = ['playlist-modify-public', 'playlist-modify-private'].join(' ');

async function getAccessTokenFromRefreshToken(refreshToken) {
  try {
    const response = await axios.post(SPOTIFY_TOKEN_URL,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }).toString(),
      {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error.response?.data || error.message);
    return null;
  }
}

async function getInitialTokens() {
  return new Promise((resolve, reject) => {
    const app = express();
    let server;

    app.get('/callback', async (req, res) => {
      try {
        const response = await axios.post(SPOTIFY_TOKEN_URL,
          new URLSearchParams({
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: REDIRECT_URI
          }).toString(),
          {
            headers: {
              'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );

        const { access_token, refresh_token } = response.data;
        saveRefreshToken(refresh_token);
        
        res.send('Authorization successful! You can close this window.');
        server.close();
        resolve(access_token);
      } catch (error) {
        reject(error);
      }
    });

    server = app.listen(8888, () => {
      console.log('Please visit this URL to authorize the application:');
      console.log(`${SPOTIFY_AUTH_URL}?${new URLSearchParams({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI
      }).toString()}`);
    });
  });
}

async function getValidAccessToken() {
  // Try to get stored refresh token
  const refreshToken = getStoredRefreshToken();
  
  if (refreshToken) {
    console.log('Found stored refresh token, attempting to get access token...');
    const accessToken = await getAccessTokenFromRefreshToken(refreshToken);
    if (accessToken) {
      return accessToken;
    }
    console.log('Stored refresh token invalid, need new authorization...');
  }

  // If no refresh token or it's invalid, get new tokens
  console.log('No valid refresh token found, starting authorization flow...');
  return await getInitialTokens();
}

module.exports = { getValidAccessToken }; 