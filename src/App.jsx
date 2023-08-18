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

  return (
    <PlayListsContext.Provider value={{
      playlists,
      setPlaylists
    }}>
      <div className='container'>
        <Home />
      </div>
    </PlayListsContext.Provider>
  )
}

export default App
