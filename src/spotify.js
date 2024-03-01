const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:5173/playlists';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const scopes = [
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-top-read',
];

export const loginURL = `
${authEndpoint}?
client_id=${clientId}&
redirect_uri=${redirectUri}&
scope=${scopes.join('%20')}&
response_type=token&
show_dialog=true`;

export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
