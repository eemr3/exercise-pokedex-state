import React, { Component } from 'react';
import pokemons from '../../services/data';
import Header from '../Header';
import Pokemon from '../Pokemon';

import './pokedex.css';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    };
  }
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Pokemon pokemons={pokemons[this.state.pokemonIndex]} key={pokemons.id} />
        </main>
      </>
    );
  }
}

export default Pokedex;
