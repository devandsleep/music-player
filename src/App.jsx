import { useState } from 'react'
import './App.css'
import Home from './components/screens/home/Home'
import { PlayListsContext } from './context'

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

  const [tracks, setTracks] = useState([
    {
      id: 1,
      img: 'eminem.jpg',
      src: 'Eminem_-_Without_Me.mp3',
      title: 'Without Me - Eminem a.k.a Slim Shady',
      author: 'Eminem'
    }
  ])

  const [recent_tracks, setRecentTracks] = useState([
    {
        id: 1,
        title: 'Without Me',
        author: 'Eminem',
        preview: 'eminem.jpg',
        len: 292
    },{
        id: 2,
        title: 'Without Me',
        author: 'Eminem',
        preview: 'eminem.jpg',
        len: 292
    },{
        id: 3,
        title: 'Without Me',
        author: 'Eminem',
        preview: 'eminem.jpg',
        len: 292
    },{
        id: 4,
        title: 'Without Me',
        author: 'Eminem',
        preview: 'eminem.jpg',
        len: 292
    },{
        id: 5,
        title: 'Without Me',
        author: 'Eminem',
        preview: 'eminem.jpg',
        len: 292
    },
])

  return (
    <PlayListsContext.Provider value={{
      playlists,
      setPlaylists,
      tracks,
      setTracks,
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
