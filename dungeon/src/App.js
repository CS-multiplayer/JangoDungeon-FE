import React, { useState } from 'react';
import './App.scss';
import Game from './components/game/Home.js'
import Login from './components/Login.js';

function App() {
  const [logedIn, setLogedIn] = useState(localStorage.getItem("user"))
  const [backendUrl, setBackendUrl] = useState('https://lambda-mud-test.herokuapp.com')

  return (
    <div className="App">

      {logedIn ? null : <Login />}
      <div className="container">
        <h1>welcome to the Jango Rango Dungeon!</h1>
        <Game backendUrl={backendUrl} />
      </div>


    </div>
  );
}

export default App;
