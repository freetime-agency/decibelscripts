Spotify Developer ClientID: 3b003caee0e4444592163fe28d995f57
Spotify Developer ClientSecret: 69999999999999999999999999999999
Spotify Base API URL: https://api.spotify.com/v1

Google Spreadsheet ID: 1YcbBkrITeURViBS4iLQc-DvTfroVDGNG102-vxlhX4I
Other info from Google for auth, like API Key:
{
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
}


Google Sheet API Limits:
While Sheets API has no hard size limits for an API request, users might experience limits from different processing components not controlled by Sheets. To speed up requests, Google recommends a 2-MB maximum payload.

Sheets API has per-minute quotas, and they're refilled every minute. For example, there's a read request limit of 300 per minute per project. If your app sends 350 requests in one minute, the additional 50 requests exceed the quota and generates a 429: Too many requests HTTP status code response. If this happens, you should use an exponential backoff algorithm. After 1 minute, you can execute requests again. Users can submit multiple requests at the same time, as long as they're within the quota limit.

All Sheets requests are applied atomically. That is, if any request is not valid then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

Spotify API Documentation:
https://developer.spotify.com/documentation/web-api/reference/

Google API Documentation:


Google Sheet Access Link:
https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit?gid={SHEET_ID}#gid={SHEET_ID}

_________________________________________

the script should be called createWeeklySpotifyAllPlaylist.js

SCRIPT INSTRUCTIONS:

First the script should generate a new {access_token} by making a POST request to the Spotify Accounts service.
https://accounts.spotify.com/api/token
Include in the Body: 
grant_type=client_credentials&client_id=3b003caee0e4444592163fe28d995f57&client_secret=a59f45541892401bb374c5caf5598682

The API will return access_token, which should be stored in a variable called {access_token}

Then, the script should start by creating a new Spotify playlist via the Spotify API.


Use the following URL to create the playlist:
https://api.spotify.com/v1/users/{user_id}/playlists
where {user_id} is: 31lr7qo7j2gmwvpnicls4qoy4t6u

Spotify account login info:
email: decibeldesignco@gmail.com
username: 31lr7qo7j2gmwvpnicls4qoy4t6u
password: Malkin7171

Spotify API Documentation states to include the following in the body of the request:
{
  "name": "Decibel Weekly Bass - {{current_date in MM/DD/YYYY with no leading 0}}",
  "description": "Every dubstep & bass music release from the week of - {{current_date in MM/DD/YYYY with no leading 0}}. If we missed anything, please send us a DM on Instagram @decibeldesignco",
  "collaborative": false,
  "public": true
}

The API will return an object called external_urls with a string called "spotify". Store this value as {playlist_url}

In this spreadsheet called "Weekly Playlists": https://docs.google.com/spreadsheets/d/1YcbBkrITeURViBS4iLQc-DvTfroVDGNG102-vxlhX4I/edit?gid=0#gid=0

On the tab called "Artists":
- Column A contains the Artist Name
- Column B contains the Spotify Artist ID (ie 23AH13eC6V0NB0QCkV6206)
- Column C is Genres, which is pulled from the genres data from the Spotify API
- Column D is the Image URL, which is pulled from the images data from the Spotify API
- Column E is the Spotify Popularity Score, which is pulled from the popularity data from the Spotify API
- Column F is the Spotify Followers Count, which is pulled from the followers data from the Spotify API
- Column G is the artist's Instagram Handle formatted as @handle

Iterate through each row of the "Artists" tab. For each row, starting in row 2 (due to header row) get the value of Column A (Artist Name) and store it in a variable called {artist_name}.

Then, we'll search it wit the Spotify API:

The URL below is for the GET request to the Spotify API to get the albums for the artist based on the Spotify Artist ID (from the Google Sheet Column B)
'https://api.spotify.com/v1/artists/{id}/albums?include_groups=album%2C+single%2Cappears_on%2Ccompilation&limit=3'
Include in Headers: Authorization: Bearer {access_token}

Return the following data for each album:
- release_date
- type
- artists
- "external_urls": {
        "spotify": 
-  "images": [
        {
          "url": 
- name
-  "artists": [
        {
          "name": 


Then, with the 3 results that were returned, the script should evaluate if any of the albums are have been release_date in the last 6 days. It should take note of the current date and time and then subtract 6 days from it for the comparison logic.

If an album has been released in the last 6 days, the script should add it to the new playlist which was generated in the first step.

If the artist has an album that gets added to the playlist, the script should then add the artists's Instagram Handle in Column G to a list called {artists_added_to_playlist}. Each Instagram Handle should only be added once to the list. Each item should have a return afterwards.



