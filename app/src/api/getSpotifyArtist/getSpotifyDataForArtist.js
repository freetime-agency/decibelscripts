const axios = require('axios');

// Constants
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const SPOTIFY_CLIENT_ID = '3b003caee0e4444592163fe28d995f57';
const SPOTIFY_CLIENT_SECRET = 'a59f45541892401bb374c5caf5598682';

async function getClientCredentialsToken() {
    try {
        const response = await axios.post(SPOTIFY_TOKEN_URL, 
            'grant_type=client_credentials&client_id=' + SPOTIFY_CLIENT_ID + '&client_secret=' + SPOTIFY_CLIENT_SECRET,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting client credentials token:', error.message);
        throw error;
    }
}

async function getArtistData(artistUrl) {
    try {
        // Extract artist ID from URL
        const artistId = artistUrl.split('/artist/')[1].split('?')[0];
        
        // Get access token
        const accessToken = await getClientCredentialsToken();
        
        // Get artist data
        const response = await axios.get(
            `${SPOTIFY_API_URL}/artists/${artistId}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );
        
        // Format the response data
        const formattedData = {
            name: response.data.name,
            id: response.data.id,
            genres: response.data.genres.join(', '),
            image_url: response.data.images[0].url,
            popularity: response.data.popularity,
            followers: response.data.followers.total
        };
        
        return formattedData;
    } catch (error) {
        console.error('Error getting artist data:', error.message);
        throw error;
    }
}

module.exports = { getArtistData }; 