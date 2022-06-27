import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSong';
import Playing from './components/Playing';
import { songs } from './context';
import DataSongs from './data/songs.json'
import { useState } from 'react';
function App() {
  const [song, setSong] =useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div className="App">
      <songs.Provider value={{ DataSongs,song, handleSetSong }}>
        <Navbar/>
        <div className="grid grid-cols-3 bg-slate-300 h-screen-navbar-player overflow-hidden">
            <DetailSong/>
            <ListSongs/>
        </div>
        <Playing/>
      </songs.Provider>
    </div>
  );
}

export default App;
