import React from 'react';
import './App.css';
import pokemons from './services/data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
