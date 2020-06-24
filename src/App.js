import React from 'react';
import logo from './logo.svg';
import './App.css';
import logoR from './Ramsses_logo.jpeg';
import Roll from 'react-reveal/Roll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>La aplicación de Ramsses Inicio.</h1>
      <div className="Distribucion">
        <img src={logoR} className="App-logoR" alt="logo" />
          <Roll bottom>
        <h2 className="V">V</h2><h2>s</h2> 
          </Roll>   
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Footer"> 
        <p>
          Ramsses App Logo vs React 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿Quien Gana?
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
