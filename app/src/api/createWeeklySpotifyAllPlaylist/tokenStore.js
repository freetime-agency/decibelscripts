const fs = require('fs');
const path = require('path');

const TOKEN_PATH = path.join(__dirname, '.spotify_refresh_token');

function saveRefreshToken(token) {
  fs.writeFileSync(TOKEN_PATH, token);
}

function getStoredRefreshToken() {
  try {
    return fs.readFileSync(TOKEN_PATH, 'utf8');
  } catch (error) {
    return null;
  }
}

module.exports = { saveRefreshToken, getStoredRefreshToken }; 