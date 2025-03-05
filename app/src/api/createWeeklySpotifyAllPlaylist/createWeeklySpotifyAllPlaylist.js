//RUN IN TERMINAL: node createWeeklySpotifyAllPlaylist.js

const axios = require('axios');
const { google } = require('googleapis');
const moment = require('moment');
const { getValidAccessToken } = require('./spotifyAuth');

// Constants
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const SPOTIFY_CLIENT_ID = '3b003caee0e4444592163fe28d995f57';
const SPOTIFY_CLIENT_SECRET = 'a59f45541892401bb374c5caf5598682';
const SPOTIFY_USER_ID = '31lr7qo7j2gmwvpnicls4qoy4t6u';
const SPREADSHEET_ID = '1YcbBkrITeURViBS4iLQc-DvTfroVDGNG102-vxlhX4I';

// Add this constant for playlist operations
const SPOTIFY_USER_ACCESS_TOKEN = 'YOUR_USER_ACCESS_TOKEN'; // We'll get this from Spotify Developer Dashboard

// Add this constant at the top with other constants
const SPOTIFY_REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN'; // We'll get this once and store it

// Google Auth credentials
const GOOGLE_CREDENTIALS = {
  "type": "service_account",
  "project_id": "keen-mission-450401-h1",
  "private_key_id": "60aca0769586727aff65e7473ad4515e84e2ece0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWz6cDYgQgv+J9\ncQ9D3JuqXVcbiE+DRVHVoEqK3jiOCjc1bgwC6hLNXqGC+WbTEHiGibeBz6+6AmxY\nDuXARmwx5v4A8lAQa4mOnp8ieO444EVVPlwViZ3cm9mzYlbsAJp8xT6Yn3YNuguN\n6OAz8T6yEo2iqUP5eT0izAOuADAw/nMHJj+NyT2/e/CKc+/2akqD4GaSeLkC0WXz\nUH4LpQvmvuqc+zo+M+Rs6GJNo6hlHoN7qRwM4TcpYih/MwRK81KJiUhvCOFWS+f0\nEzdktL+IeJrXoniTnJikF3Q/Pesyy60GhYBnmlRwxlesmYyWR2jzKx5CfC7PzlUY\nqN5SE0OxAgMBAAECggEAAN7d3SQ1XUhdIlo4zY2qz2vsy6NVGVR+EcQs5H86Gj3E\nJjjY+Wf3UuqgHmdfkBRg0lXuLDtnhE+IlBVd33ZNmj4Wr7xrqtsJDKlbs98gIzNU\nppp6cy96nWjKibkDc7YHf5ZT+U3VTmDk1XgLqhGPX2zWsvxAgWB5LmTGe6AxByQh\nSUy1Pd6dPmhKeSRB8Y4ZykKtbfg0g6apzZq67EFiASnlesuOopPOWxgHFS8DxZxd\nm1GizmMNYKrFkUtnhLePDXNmauvl9qkr+owRG8XuNK0e3rRK45o9yS5A10Wurc4c\npHKpXUwTNw2yqr8ofFdNl9khP8s3yKG942u2txepgQKBgQDvZuZtD4jaqg9bDZd9\neKD5jlG965kFV7FKpzzYvZaanOS/578fyBpUBus6Qytc/LyFUuCl7xeztIm7VTPg\ndw1SHnRtERReK5hXolfHCHnNVWsvdJWWXH63/lUR08522byKpSzvI1qpa2vT2iDL\nD0KhnyFEh7dSpZsACOMiEHTvgQKBgQDltEttxwUP1MsYWpph2EjQGVnds7xbRjuj\n7K9HldlXZpTu8imELGH05RZOnJk6etL+hgqqQxycUzAcTFcmcQzq+9LcOMN8yNyX\n4RRiRxvSgrySsRCwcA7x+KwOBNgjdSbhGk+m7rnc+f3qEAt/XVXYRUP39plVB9v2\n/aRkWidsMQKBgAvOZ065lWYzPM6gvPfTGx0zh5R2KfW5fWTRGo8VyneVhTJxm1tV\n4vaB4NfeuCS90g5BKBMG14RlQuWaLhTDykRifBtk3DxIqhqoRuvp3xfhPof4l+fy\nZ81rHYbjiysRUdsEilLAy5fPVGH+P9/DwOV3k4xtpPzObfZyecEUTrABAoGBAJnR\niAk1ErCtQGtIkMUgvnGL6F/L8j/04g89eYqoT+h1KxpvU1nNFrOVjMCLoRhGE3CZ\ndh7Z3hjYpAjvHhUB8zKP+325DT9MiluyP6IoF/t5zKk2pQRhpcBnU1/34nysAKMQ\nqXIRvqi5R00r/WcGq2utxnwPyFHmd2gIJcOFk4yhAoGAW1jiR0wSfEqzwbdsJeNk\nxdfZ1nyBGkZWTG/LNEioyqALuqrDYeTLWN3B0HOc6R2NC3qJxCmM8XUXh0HlrSYK\nMfaIvGHfMSEJho1LhvB8LehaafhYCSGAGpjHFnQwzOr3+V23WyM7KG2v65l7itxn\nJrvFqWDrRONpVwXG8O1z0HY=\n-----END PRIVATE KEY-----\n",
  "client_email": "decibelplaylists@keen-mission-450401-h1.iam.gserviceaccount.com",
  "client_id": "110693473903050473065",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/decibelplaylists%40keen-mission-450401-h1.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

async function getClientCredentialsToken() {
  try {
    console.log('Getting Spotify client credentials token...');
    const response = await axios.post(SPOTIFY_TOKEN_URL, 
      'grant_type=client_credentials&client_id=' + SPOTIFY_CLIENT_ID + '&client_secret=' + SPOTIFY_CLIENT_SECRET,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    console.log('Successfully got client credentials token');
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting client credentials token:', error.message);
    throw error;
  }
}

async function createSpotifyPlaylist(accessToken) {
  const currentDate = moment().format('M/D/YYYY');
  
  try {
    console.log('Creating playlist...');
    console.log('Using access token:', accessToken.substring(0, 20) + '...');
    
    const response = await axios.post(
      `${SPOTIFY_API_URL}/users/${SPOTIFY_USER_ID}/playlists`,
      {
        name: `Decibel Weekly Bass - ${currentDate}`,
        description: `Every dubstep & bass music release from the week of - ${currentDate}. If we missed anything, please send us a DM on Instagram @decibeldesignco`,
        public: true,
        collaborative: false
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return {
      playlistId: response.data.id,
      playlistUrl: response.data.external_urls.spotify
    };
  } catch (error) {
    console.error('Error creating playlist:');
    console.error('Status:', error.response?.status);
    console.error('Error data:', error.response?.data);
    throw error;
  }
}

async function getArtistAlbums(accessToken, artistId) {
  try {
    console.log(`Getting albums for artist ID: ${artistId}`);
    const response = await axios.get(
      `${SPOTIFY_API_URL}/artists/${artistId}/albums?include_groups=album%2Csingle%2Cappears_on%2Ccompilation&limit=3`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
    return response.data.items;
  } catch (error) {
    console.error(`Error getting albums for artist ${artistId}:`);
    console.error('Status:', error.response?.status);
    console.error('Error data:', error.response?.data);
    return [];
  }
}

async function addTracksToPlaylist(accessToken, playlistId, trackUris) {
  if (!trackUris.length) return;
  
  try {
    await axios.post(
      `${SPOTIFY_API_URL}/playlists/${playlistId}/tracks`,
      {
        uris: trackUris
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error adding tracks to playlist:', error);
    throw error;
  }
}

async function getGoogleSheetData() {
  try {
    console.log('Initializing Google Sheets connection...');
    
    const auth = new google.auth.GoogleAuth({
      credentials: GOOGLE_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // First, get spreadsheet metadata to check available sheets
    console.log('Fetching spreadsheet metadata...');
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID
    });

    console.log('Available sheets:', metadata.data.sheets.map(sheet => sheet.properties.title));

    // Verify 'Artist List' sheet exists
    const artistsSheet = metadata.data.sheets.find(sheet => 
      sheet.properties.title.toLowerCase().replace(/\s+/g, '') === 'artistlist'
    );

    if (!artistsSheet) {
      throw new Error('Could not find sheet named "Artist List". Available sheets are: ' + 
        metadata.data.sheets.map(s => s.properties.title).join(', '));
    }

    console.log('Found Artist List sheet, fetching data...');
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `'Artist List'!A2:G`  // Updated sheet name
    });

    if (!response.data.values) {
      throw new Error('No data found in spreadsheet');
    }

    console.log(`Successfully fetched ${response.data.values.length} rows from Google Sheet`);
    return response.data.values;

  } catch (error) {
    console.error('Error accessing Google Sheet:');
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });
    process.exit(1);
  }
}

async function main() {
  const sheetData = await getGoogleSheetData();
  console.log('Google Sheets connection successful. Proceeding with Spotify operations...');
  
  try {
    const accessToken = await getValidAccessToken();
    const sixDaysAgo = moment().subtract(6, 'days').startOf('day');
    
    // Create new playlist first
    console.log('\nCreating new Spotify playlist...');
    const { playlistId, playlistUrl } = await createSpotifyPlaylist(accessToken);
    
    // Log playlist details
    const currentDate = moment().format('M/D/YYYY');
    console.log('\n=== New Playlist Created ===');
    console.log('Name:', `Decibel Weekly Bass - ${currentDate}`);
    console.log('Description:', `Every dubstep & bass music release from the week of - ${currentDate}. If we missed anything, please send us a DM on Instagram @decibeldesignco`);
    console.log('URL:', playlistUrl);
    console.log('Playlist ID:', playlistId);

    // Process all artists
    console.log(`\nProcessing all ${sheetData.length} artists...`);
    const tracksToAdd = [];
    const recentReleasesSummary = [];
    const processedAlbumIds = new Set();  // Add this to track unique albums
    let processedCount = 0;
    let skippedCount = 0;

    for (let i = 0; i < sheetData.length; i++) {
      const [artistName, spotifyId] = sheetData[i];
      processedCount++;
      
      // Progress update every 50 artists
      if (processedCount % 50 === 0) {
        console.log(`\nProgress: ${processedCount}/${sheetData.length} artists processed (${skippedCount} skipped)`);
      }

      // Check for invalid Spotify IDs
      if (!spotifyId || 
          spotifyId.includes('#') || 
          spotifyId.trim() === '' || 
          spotifyId.length < 10) {  // Valid Spotify IDs are longer than 10 chars
        console.log(`\nArtist ${processedCount}: ${artistName || 'Unknown'} - No valid Spotify ID available, skipping...`);
        skippedCount++;
        continue;  // Skip delay and move to next artist
      }

      console.log(`\nChecking artist ${processedCount}: ${artistName} (ID: ${spotifyId})`);
      
      const albums = await getArtistAlbums(accessToken, spotifyId);
      
      // Check each album's release date
      const recentAlbums = albums.filter(album => {
        const releaseDate = moment(album.release_date);
        const isRecent = releaseDate.isSameOrAfter(sixDaysAgo);
        if (isRecent) {
          console.log(`Found recent album: "${album.name}" (${album.release_date})`);
        }
        return isRecent;
      });

      if (recentAlbums.length > 0) {
        console.log(`Successfully retrieved albums, found ${recentAlbums.length} recent releases`);
        // Get track URIs for each album
        for (const album of recentAlbums) {
          // Skip if we've already processed this album
          if (processedAlbumIds.has(album.id)) {
            console.log(`Album "${album.name}" already added, skipping...`);
            continue;
          }
          
          processedAlbumIds.add(album.id);  // Mark this album as processed
          
          const albumTracks = await axios.get(
            `${SPOTIFY_API_URL}/albums/${album.id}/tracks`,
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            }
          );
          tracksToAdd.push(...albumTracks.data.items.map(track => track.uri));
          
          // Add to summary
          recentReleasesSummary.push({
            artist: artistName,
            album: album.name,
            releaseDate: album.release_date,
            trackCount: albumTracks.data.items.length
          });
        }
      } else {
        console.log('Successfully retrieved albums, none were recent');
      }

      // Add 1 second delay between valid artist checks only
      if (i < sheetData.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    // Print final processing statistics
    console.log('\n=== Processing Statistics ===');
    console.log(`Total artists processed: ${processedCount}`);
    console.log(`Artists skipped (no Spotify ID): ${skippedCount}`);
    console.log(`Artists checked: ${processedCount - skippedCount}`);

    // Print summary before adding tracks
    console.log('\n=== Recent Releases Summary ===');
    console.log(`Found ${recentReleasesSummary.length} recent releases:`);
    recentReleasesSummary.forEach(release => {
      console.log(`\n- ${release.artist} - "${release.album}"`);
      console.log(`  Released: ${release.releaseDate}`);
      console.log(`  Tracks: ${release.trackCount}`);
    });

    // Add tracks to playlist
    if (tracksToAdd.length > 0) {
      console.log(`\nAdding ${tracksToAdd.length} total tracks to playlist...`);
      await addTracksToPlaylist(accessToken, playlistId, tracksToAdd);
      console.log('Successfully added tracks to playlist');
    } else {
      console.log('\nNo recent releases found to add to playlist');
    }

    console.log('\nScript completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('Error in main process:', error);
    throw error;
  }
}

main().catch(error => {
  console.error('Fatal error in main process:', error);
  process.exit(1);
});