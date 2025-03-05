const express = require('express');
const path = require('path');
const cors = require('cors');

// Import API handlers
const { getArtistData } = require('./api/getSpotifyArtist/getSpotifyDataForArtist');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from src directory
app.use(express.static(path.join(__dirname)));

// API Endpoints
app.post('/api/getSpotifyArtist', async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'Artist URL is required' });
        }

        const artistData = await getArtistData(url);
        res.json(artistData);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: error.message || 'Failed to fetch artist data' });
    }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Handle specific page routes
app.get('/spotify-weekly', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'spotify-weekly.html'));
});

app.get('/spotify-artist', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'spotify-artist.html'));
});

// Fallback route
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 