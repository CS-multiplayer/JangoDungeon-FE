import React, { useState } from 'react';
import './App.scss';
import Game from './components/game/Home.js'
import Login from './components/Login.js';

function App() {
  const [logedIn, setLogedIn] = useState(localStorage.getItem("user"))
  const [backendUrl, setBackendUrl] = useState('https://lambda-mud-test.herokuapp.com')

  return (
    <div className="App">
      <h2>Welcome to the Jango Rango Dungeon!</h2>

      <div className="container">
        <Game backendUrl={backendUrl} />
      </div>


    </div>
  );
}

export default App;
