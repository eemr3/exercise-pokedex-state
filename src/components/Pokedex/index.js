import React, { Component } from 'react';
import pokemons from '../../services/data';
import Header from '../Header';
import Pokemon from '../Pokemon';

import './pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <>
        <Header />
        <main className='container'>
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </main>
      </>
    );
  }
}

export default Pokedex;
