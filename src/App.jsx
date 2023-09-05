import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/screens/home/Home'
import { PlayListsContext } from './context'
import MusicService from './API/MusicService'

function App() {
  const [playlists, setPlaylists] = useState([{
    id: 1,
    title: 'Rap',
    img: 'eminem.jpg',
  },
  {
    id: 2,
    title: 'Lofi',
    img: 'lofi.jpg'
  },
  {
    id: 3,
    title: 'Anime Lofi',
    img: 'anime_lofi.jpg'
  }])
  const [songs, setSongs] = useState([])
  const [recent_tracks, setRecentTracks] = useState([
    {
      id: 1,
      title: 'Without Me',
      author: 'Eminem',
      preview: 'eminem.jpg',
      len: 292
    }, {
      id: 2,
      title: 'Without Me',
      author: 'Eminem',
      preview: 'eminem.jpg',
      len: 292
    }, {
      id: 3,
      title: 'Without Me',
      author: 'Eminem',
      preview: 'eminem.jpg',
      len: 292
    }, {
      id: 4,
      title: 'Without Me',
      author: 'Eminem',
      preview: 'eminem.jpg',
      len: 292
    }, {
      id: 5,
      title: 'Without Me',
      author: 'Eminem',
      preview: 'eminem.jpg',
      len: 292
    }
  ])

  const [track, setCurrentTrack] = useState({})

  const saveCurrentTrackToLocalStorage = (track) => {
    localStorage.setItem('currentTrack', JSON.stringify(track));
  };

  const loadCurrentTrackFromLocalStorage = () => {
    const trackJSON = localStorage.getItem('currentTrack');
    return trackJSON ? JSON.parse(trackJSON) : null;
  };

  useEffect(() => {
    async function fetchTrendingSongs() {
      try {
        const response = await MusicService.getTrending();
        setSongs(response);
      } catch (error) {
        console.error('Error on fetching tracks for player', error);
      }
    }
    fetchTrendingSongs();
  }, []);

  return (
    <PlayListsContext.Provider value={{
      playlists,
      setPlaylists,
      songs,
      setSongs,
      track,
      setCurrentTrack,
      saveCurrentTrackToLocalStorage,
      loadCurrentTrackFromLocalStorage,
      recent_tracks,
      setRecentTracks
    }}>
      <div className='container'>
        <Home />
      </div>
    </PlayListsContext.Provider>
  )
}

export default App
