import React, { useState, useEffect } from 'react';
import './App.scss';
import Game from './components/game/Home.js'
import NavBar from './components/NavBar.js';

function App() {
  const [logedIn, setLogedIn] = useState(!!localStorage.getItem("key"))
  const [backendUrl, setBackendUrl] = useState('https://lambda-mud-test.herokuapp.com')

  useEffect(() => {
    if (localStorage.getItem('key')) {
      setLogedIn(true)
    } else {
      setLogedIn(false)
    }
  })
  function setLocalKey() {
    if (localStorage.getItem('key')) {
      setLogedIn(true)
    } else {
      setLogedIn(false)
    }
  }
  return (
    <div className="App">
      <NavBar logedIn={logedIn} backendUrl={backendUrl} setLocalKey={setLocalKey} />

      <h2>Welcome to the Jango Rango Dungeon!</h2>
      <div className="container">
        <Game backendUrl={backendUrl} />
      </div>


    </div>
  );
}

export default App;
