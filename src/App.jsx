import { useEffect, useState } from 'react'
import './App.css'
import { AuthContext, MusicContext } from './context'
import MusicService from './API/MusicService'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

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
  const [track, setCurrentTrack] = useState({})
  const [isPlaying, setIsPlaying] = useState(false);

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

  const changeTrack = (newTrack) => {
    setCurrentTrack(newTrack)
    setIsPlaying(true)
  }

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true)
    }
  }, [isAuth])


  return (
    <MusicContext.Provider value={{
      playlists,
      changeTrack,
      songs,
      setSongs,
      track,
      setCurrentTrack,
      saveCurrentTrackToLocalStorage,
      loadCurrentTrackFromLocalStorage,
      isPlaying,
      setIsPlaying,
    }}>
      <div className='container'>
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
        }}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </MusicContext.Provider>
  )
}

export default App
