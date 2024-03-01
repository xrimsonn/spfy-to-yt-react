import { useEffect, useState } from 'react';
import { getToken } from '../spotify';
import Playlist from './Playlist';
import SpotifyWebAPI from 'spotify-web-api-js';

function Playlists() {
  const spotify = new SpotifyWebAPI();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const _spotifyToken = getToken().access_token;
    window.location.hash = '';

    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);

      spotify.getUserPlaylists().then((playlistsData) => {
        const newPlaylists = playlistsData.items.map((playlist) => ({
          id: playlist.id,
          name: playlist.name,
          url: playlist.images[0].url,
        }));

        setPlaylists((prev) => [...prev, ...newPlaylists]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(playlists);
  }, [playlists]);

  return (
    <>
      <hgroup>
        <h1>Spotify to YouTube</h1>
        <a href="https://www.github.com/xrimsonn">José Antonio Rosales</a>
      </hgroup>
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          name={playlist.name}
          url={playlist.url}
        />
      ))}
    </>
  );
}

export default Playlists;
