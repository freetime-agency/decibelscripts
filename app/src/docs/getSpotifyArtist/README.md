# Get Spotify Data for Artist

This script fetches artist data from Spotify using the artist's Spotify URL.

## Installation

1. Make sure you have Node.js installed
2. Run `npm install` to install dependencies

## Usage

Run the script with a Spotify artist URL as an argument:

```bash
node getSpotifyDataForArtist.js "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1aCvb"
```

The script will output the artist's data in JSON format.

## Example Output

The script will return a JSON object containing the artist's information, including:
- Name
- Genres
- Followers count
- Popularity score
- External URLs
- Images
- And more

## Error Handling

The script includes error handling for:
- Missing URL argument
- Invalid URL format
- Failed API authentication
- Failed API requests 